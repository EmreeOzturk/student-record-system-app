import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const data = await prisma.$queryRaw`DELETE FROM events WHERE id = ${id}`;
  return NextResponse.json(data);
}
