
require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

async function verify() {
  const MONGODB_URI = process.env.DB_URI;
  if (!MONGODB_URI) { console.error("No DB_URI"); process.exit(1); }

  try {
    console.log("Connecting...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected.");
    
    // Define minimal schemas to query collection counts
    // Note: We use mongoose.connection.db to query collections directly if possible, 
    // but using models is safer to match app logic.
    const Category = mongoose.model('Category', new Schema({ name: String }), 'categories');
    const Product = mongoose.model('Product', new Schema({ title: String }), 'products');
    const Brand = mongoose.model('Brand', new Schema({ name: String }), 'brands');

    const catCount = await Category.countDocuments();
    const prodCount = await Product.countDocuments();
    const brandCount = await Brand.countDocuments();

    console.log(`Categories: ${catCount}`);
    console.log(`Products: ${prodCount}`);
    console.log(`Brands: ${brandCount}`);

    process.exit(0);
  } catch (err) {
    console.error("Verification failed:", err);
    process.exit(1);
  }
}

verify();
