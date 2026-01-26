
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import { Category } from '@/lib/models';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    await connectToDatabase();
    const categories = await Category.find({}).sort({ name: 1 });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Categories GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const body = await req.json();
    const category = await Category.create(body);
    return NextResponse.json(category);
  } catch (error) {
    console.error('Categories POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
