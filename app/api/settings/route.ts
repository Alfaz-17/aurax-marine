
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import { Settings } from '@/lib/models';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    await connectToDatabase();
    let settings = await Settings.findOne();
    
    if (!settings) {
      // Create default settings if they don't exist
      settings = await Settings.create({
        autoBackgroundRemoval: false,
        applyWatermark: true,
        watermarkText: 'AURAX Marine Solutions'
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Settings GET error:', error);
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
    
    let settings = await Settings.findOne();
    
    if (settings) {
      settings = await Settings.findByIdAndUpdate(settings._id, body, { new: true });
    } else {
      settings = await Settings.create(body);
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Settings POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
