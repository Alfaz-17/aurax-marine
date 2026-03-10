
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import { Product, Category, Brand, Order } from '@/lib/models';
import { getSession } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    
    const [productCount, categoryCount, brandCount, orderCount] = await Promise.all([
      Product.countDocuments(),
      Category.countDocuments(),
      Brand.countDocuments(),
      Order.countDocuments(),
    ]);

    return NextResponse.json({
      products: productCount,
      categories: categoryCount,
      brands: brandCount,
      orders: orderCount
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
