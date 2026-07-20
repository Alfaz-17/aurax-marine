import connectToDatabase from './db';
import { Product, Category } from './models';

// Using global to persist the cache across Next.js dev server hot-reloads
interface CacheStore {
  products: Map<string, any>;
  categories: any | null;
}

declare global {
  var dbCache: CacheStore;
}

if (!global.dbCache) {
  global.dbCache = {
    products: new Map(),
    categories: null,
  };
}

const cache = global.dbCache;

export async function getCachedCategories() {
  if (cache.categories) {
    console.log('[Cache] Categories hit');
    return cache.categories;
  }

  console.log('[Cache] Categories miss. Fetching from database...');
  await connectToDatabase();
  const categories = await Category.find({}).sort({ name: 1 }).lean();
  cache.categories = categories;
  return categories;
}

export async function getCachedProducts(query: any) {
  const cacheKey = JSON.stringify(query);
  if (cache.products.has(cacheKey)) {
    console.log(`[Cache] Products hit for query: ${cacheKey}`);
    return cache.products.get(cacheKey);
  }

  console.log(`[Cache] Products miss for query: ${cacheKey}. Fetching from database...`);
  await connectToDatabase();
  const products = await Product.find(query)
    .populate('category', 'name slug')
    .sort({ createdAt: -1 })
    .lean();
  
  cache.products.set(cacheKey, products);
  return products;
}

// Background updates to pre-warm the cache and keep it fresh
export async function updateCategoriesCacheInBackground() {
  connectToDatabase()
    .then(() => Category.find({}).sort({ name: 1 }).lean())
    .then((categories) => {
      cache.categories = categories;
      console.log('[Cache] Categories cache pre-warmed in background.');
    })
    .catch((err) => {
      console.error('[Cache] Failed to update categories cache in background:', err);
    });
}

export async function updateProductsCacheInBackground() {
  // Common configurations to pre-warm
  const queriesToWarm = [
    {},
    { featured: true }
  ];

  // Also include any previously requested queries
  for (const keyStr of cache.products.keys()) {
    try {
      const parsed = JSON.parse(keyStr);
      if (!queriesToWarm.some(q => JSON.stringify(q) === keyStr)) {
        queriesToWarm.push(parsed);
      }
    } catch (e) {}
  }

  // Pre-warm in background
  connectToDatabase()
    .then(async () => {
      for (const query of queriesToWarm) {
        const key = JSON.stringify(query);
        const products = await Product.find(query)
          .populate('category', 'name slug')
          .sort({ createdAt: -1 })
          .lean();
        cache.products.set(key, products);
      }
      console.log('[Cache] Products cache pre-warmed in background.');
    })
    .catch((err) => {
      console.error('[Cache] Failed to update products cache in background:', err);
    });
}

// Invalidation + Background Pre-warming triggers
export function invalidateCategoriesCache() {
  console.log('[Cache] Invalidating categories cache...');
  cache.categories = null;
  updateCategoriesCacheInBackground();
}

export function invalidateProductsCache() {
  console.log('[Cache] Invalidating products cache...');
  cache.products.clear();
  updateProductsCacheInBackground();
}
