import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const data = await prisma.$queryRaw`SELECT * FROM student_courses, courses
    WHERE student_courses.student_id = ${id} AND student_courses.course_id = courses.id`;

  return NextResponse.json(data);
}
