
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import { Product, Category, Brand, Blog } from '@/lib/models';
import { products, categories, brands, blogs } from '@/lib/seed-data';

export async function GET() {
  try {
    await connectToDatabase();

    // Clear existing data
    await Promise.all([
      Product.deleteMany({}),
      Category.deleteMany({}),
      Brand.deleteMany({}),
      Blog.deleteMany({})
    ]);

    // Seed Categories
    const createdCategories = await Category.insertMany(categories);
    const catMap = createdCategories.reduce((acc, cat) => {
      acc[cat.name] = cat._id;
      return acc;
    }, {} as Record<string, any>);

    // Seed Brands
    const createdBrands = await Brand.insertMany(brands);
    const brandMap = createdBrands.reduce((acc, brand) => {
      acc[brand.name] = brand._id;
      return acc;
    }, {} as Record<string, any>);

    // Seed Blogs
    await Blog.insertMany(blogs);

    // Seed Products
    const productsWithRefs = products.map(p => ({
      ...p,
      category: catMap[p.categoryName],
      brand: brandMap[p.brandName]
    }));

    await Product.insertMany(productsWithRefs);

    return NextResponse.json({ 
      message: "Maritime database re-aligned successfully", 
      stats: {
        categories: createdCategories.length,
        brands: createdBrands.length,
        products: products.length,
        blogs: blogs.length
      } 
    });
  } catch (error) {
    console.error("Critical Seeding Error:", error);
    return NextResponse.json({ error: "Maritime data alignment failed" }, { status: 500 });
  }
}
