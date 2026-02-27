
require('dotenv').config();
const mongoose = require('mongoose');

// Unified Seed Data for Spice Ship Supplier
const brands = [
  { name: "MAN B&W", logo: "https://www.man-es.com/images/default-source/logos/man-energy-solutions-logo.svg", description: "World-leading provider of large-bore diesel engines and turbomachinery." },
  { name: "Wartsila", logo: "https://www.wartsila.com/images/default-source/global-images/wartsila_logo_og.jpg", description: "Global leader in smart technologies and complete lifecycle solutions for the marine market." },
  { name: "Caterpillar", logo: "https://www.cat.com/content/dam/catdotcom/logo/cat-logo.png", description: "Premier manufacturer of marine diesel engines and generator sets." },
  { name: "Mitsubishi", logo: "https://www.mhi.com/assets/img/common/logo_mhi.png", description: "Advanced marine power systems and high-reliability heavy machinery." },
  { name: "Cummins", logo: "https://www.cummins.com/sites/default/files/styles/image_header_mobile/public/2021-08/cummins-logo.png", description: "Dependable marine power for any application, from recreational to commercial." },
  { name: "Volvo Penta", logo: "https://www.volvopenta.com/static/images/volvo-penta-logo.png", description: "Innovative propulsion systems and engine solutions for marine and industrial use." }
];

const categories = [
  { name: "Main Engines", description: "Primary propulsion units for commercial and industrial vessels.", image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" },
  { name: "Auxiliary Engines", description: "Generator sets and secondary power units for vessel operations.", image: "https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg" },
  { name: "Turbochargers", description: "High-performance air compression systems for improved engine efficiency.", image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" },
  { name: "Fuel Systems", description: "Injection pumps, nozzles, and fuel treatment components.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" },
  { name: "Cylinder Components", description: "Heads, liners, pistons, and ring sets for major engine overhauls.", image: "https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg" },
  { name: "Automation & Control", description: "Engine monitoring and bridge control systems.", image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" }
];

const products = [
  {
    title: "MAN B&W 6G70ME-C9.5",
    description: "Ultra-long-stroke G-type engine designed for maximum efficiency and modern fuel flexibility.",
    price: 1250000,
    categoryName: "Main Engines",
    brandName: "MAN B&W",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    images: ["https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"],
    featured: true
  },
  {
    title: "Wartsila 31 Generator Set",
    description: "Recognized as the world's most efficient 4-stroke diesel engine, providing exceptional reliability.",
    price: 450000,
    categoryName: "Auxiliary Engines",
    brandName: "Wartsila",
    image: "https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg",
    images: ["https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg"],
    featured: true
  },
  {
    title: "High-Pressure Fuel Injection Pump",
    description: "Precision-engineered pump for MAN B&W series engines, ensuring optimal fuel atomization.",
    price: 12500,
    categoryName: "Fuel Systems",
    brandName: "MAN B&W",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"],
    featured: true
  },
  {
    title: "TPL-85 Turbocharger Cartridge",
    description: "Complete reconditioned cartridge for ABB TPL series, balanced and ready for installation.",
    price: 35000,
    categoryName: "Turbochargers",
    brandName: "Mitsubishi",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    images: ["https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"],
    featured: false
  },
  {
    title: "Caterpillar C32 Marine Engine",
    description: "Compact, high-displacement marine engine for light commercial and high-speed applications.",
    price: 185000,
    categoryName: "Main Engines",
    brandName: "Caterpillar",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"],
    featured: true
  }
];

const blogs = [
  {
    title: "Optimizing 2-Stroke Engine Performance",
    excerpt: "Key maintenance strategies for MAN B&W ME-series engines to reduce fuel consumption.",
    content: "Comprehensive guide for marine engineers on adjusting timing and fuel injection parameters for maximum efficiency.",
    image: "https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg"
  },
  {
    title: "The Shift to Dual-Fuel Propulsion",
    excerpt: "Why modern fleets are transitioning to LNG and Ammonia-ready engine designs.",
    content: "Analysis of the environmental and economic drivers behind the adoption of dual-fuel engine technology in commercial shipping.",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
  }
];

async function seed() {
  const MONGODB_URI = process.env.DB_URI;
  
  if (!MONGODB_URI) {
    console.error("Error: DB_URI not found in environment variables.");
    process.exit(1);
  }

  try {
    console.log("Connecting to database...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected.");

    // Define schemas here to match lib/models.ts EXACTLY
    const Category = mongoose.models.Category || mongoose.model('Category', new mongoose.Schema({ 
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String }
    }, { timestamps: true }));

    const Brand = mongoose.models.Brand || mongoose.model('Brand', new mongoose.Schema({ 
        name: { type: String, required: true },
        logo: { type: String },
        description: { type: String }
    }, { timestamps: true }));

    const Blog = mongoose.models.Blog || mongoose.model('Blog', new mongoose.Schema({ 
        title: { type: String, required: true },
        excerpt: { type: String },
        content: { type: String },
        image: { type: String },
        date: { type: Date, default: Date.now }
    }, { timestamps: true }));

    const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({ 
      title: { type: String, required: true },
      description: { type: String },
      price: { type: Number, default: 0 }, 
      category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
      brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
      image: { type: String },
      images: [{ type: String }],
      featured: { type: Boolean, default: false }
    }, { timestamps: true }));

    console.log("Clearing existing data...");
    await Promise.all([
      Category.deleteMany({}),
      Brand.deleteMany({}),
      Blog.deleteMany({}),
      Product.deleteMany({})
    ]);

    console.log("Seeding categories...");
    const createdCats = await Category.insertMany(categories);
    const catMap = createdCats.reduce((acc, c) => ({ ...acc, [c.name]: c._id }), {});

    console.log("Seeding brands...");
    const createdBrands = await Brand.insertMany(brands);
    const brandMap = createdBrands.reduce((acc, b) => ({ ...acc, [b.name]: b._id }), {});

    console.log("Seeding blogs...");
    await Blog.insertMany(blogs);

    console.log("Seeding products...");
    const productsWithRefs = products.map(p => ({
      ...p,
      category: catMap[p.categoryName],
      brand: brandMap[p.brandName]
    }));
    await Product.insertMany(productsWithRefs);

    console.log("Seeding complete successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error during seeding:", err);
    process.exit(1);
  }
}

seed();
