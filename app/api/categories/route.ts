
import { NextResponse } from 'next/server';
import { getCachedCategories, invalidateCategoriesCache } from '@/lib/cache';
import { getSession } from '@/lib/auth';
import connectToDatabase from '@/lib/db';
import { Category } from '@/lib/models';

export async function GET() {
  try {
    const categories = await getCachedCategories();
    return NextResponse.json(categories, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Categories GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const body = await req.json();
    const category = await Category.create(body);
    
    // Invalidate categories cache and pre-warm in background
    invalidateCategoriesCache();
    
    return NextResponse.json(category);
  } catch (error) {
    console.error('Categories POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
