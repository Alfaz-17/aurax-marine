
import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const User = models?.User || model('User', UserSchema);

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

export const Category = models?.Category || model('Category', CategorySchema);

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  image: { type: String },
  images: [{ type: String }],
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export const Product = models?.Product || model('Product', ProductSchema);

const BrandSchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String },
  description: { type: String }
}, { timestamps: true });

export const Brand = models?.Brand || model('Brand', BrandSchema);

const BlogSchema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  content: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Blog = models?.Blog || model('Blog', BlogSchema);
