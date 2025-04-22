import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface PostRequestData {
  title: string;
  slug: string;
  description?: string;
  content?: string;
  pubDate: string;
  heroImage?: string;
  authors?: string[];
  categories?: string[];
  tags?: string[];
}

function isValidPostData(data: Partial<PostRequestData>): data is PostRequestData {
  return typeof data.title === 'string' && typeof data.slug === 'string' && typeof data.pubDate === 'string';
}

export async function POST(req: Request) {
  try {
    const requestData = (await req.json()) as Partial<PostRequestData>;

    if (!isValidPostData(requestData)) {
      return NextResponse.json(
        { error: 'Title, slug, dan pubDate wajib diisi' },
        { status: 400 }
      );
    }

    const {
      title,
      slug,
      pubDate,
      description = '',
      content = '',
      heroImage = '',
      authors = [],
      categories = [],
      tags = []
    } = requestData;

    const newPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        pubDate: new Date(pubDate),
        description,
        content,
        heroImage,
        authors: {
          connect: authors.map((id) => ({ id }))
        },
        categories: {
          connect: categories.map((id) => ({ id }))
        },
        tags: {
          connect: tags.map((id) => ({ id }))
        }
      },
      include: {
        authors: true,
        categories: true,
        tags: true
      }
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    const message = error instanceof Error ? error.message : 'Terjadi kesalahan server';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      include: {
        authors: true,
        categories: true,
        tags: true
      },
      orderBy: {
        pubDate: 'desc'
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    const message = error instanceof Error ? error.message : 'Gagal mengambil data posts';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}