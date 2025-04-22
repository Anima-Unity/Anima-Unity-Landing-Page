import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Hapus relasi terlebih dahulu
    await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        authors: { set: [] },
        categories: { set: [] },
        tags: { set: [] }
      }
    });

    // Baru hapus post
    await prisma.blogPost.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}