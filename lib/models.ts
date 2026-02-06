
import mongoose, { Schema, model, models, Model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const User: Model<any> = models.User || model('User', UserSchema);

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

export const Category: Model<any> = models.Category || model('Category', CategorySchema);

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

export const Product: Model<any> = models.Product || model('Product', ProductSchema);

const BrandSchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String },
  description: { type: String }
}, { timestamps: true });

export const Brand: Model<any> = models.Brand || model('Brand', BrandSchema);

const BlogSchema = new Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  content: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Blog: Model<any> = models.Blog || model('Blog', BlogSchema);

const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  productTitle: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 }
});

const OrderSchema = new Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  items: [OrderItemSchema],
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  notes: { type: String }
}, { timestamps: true });

export const Order: Model<any> = models.Order || model('Order', OrderSchema);

const SettingsSchema = new Schema({
  autoBackgroundRemoval: { type: Boolean, default: false },
  applyWatermark: { type: Boolean, default: true },
  watermarkText: { type: String, default: 'AURAX Marine Solutions' }
}, { timestamps: true });

export const Settings: Model<any> = models.Settings || model('Settings', SettingsSchema);
