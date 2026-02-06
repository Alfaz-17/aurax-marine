
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export function signToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function getSession(req?: Request) {
  // 1. Try to get token from cookies
  const cookieStore = await cookies();
  let token = cookieStore.get('auth_token')?.value;
  let source = 'cookie';

  // 2. Fallback to Authorization header if token not in cookies
  if (!token && req) {
    const authHeader = req.headers.get('Authorization');
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.substring(7);
      source = 'header';
    }
  }

  if (!token) {
    console.log('[Auth] No token found in cookies or header');
    return null;
  }

  const payload = verifyToken(token);
  if (!payload) {
    console.log(`[Auth] Token verification failed from ${source}`);
    return null;
  }

  return payload;
}
