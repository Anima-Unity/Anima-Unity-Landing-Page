import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const authors = await prisma.author.findMany();
  return NextResponse.json(authors);
}