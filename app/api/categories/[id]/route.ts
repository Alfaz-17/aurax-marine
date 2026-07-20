
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import { Category } from '@/lib/models';
import { getSession } from '@/lib/auth';
import { invalidateCategoriesCache } from '@/lib/cache';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await connectToDatabase();
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    // Invalidate categories cache and pre-warm in background
    invalidateCategoriesCache();

    return NextResponse.json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Category DELETE error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
