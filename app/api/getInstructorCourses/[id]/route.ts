import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { InstructorCourses } from '@/types';
const prisma = new PrismaClient();
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const courseDetails = await prisma.$queryRaw`
  SELECT * FROM courses WHERE id 
    IN (SELECT course_id FROM course_instructors WHERE instructor_id = ${id})`;

  return NextResponse.json(courseDetails);
}
