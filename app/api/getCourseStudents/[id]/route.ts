import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const data = await prisma.$queryRaw`SELECT 
    students.id as id,
    students.first_name as first_name,
    students.last_name as last_name,
    students.birth_date as birth_date,
    students.gender as gender,

    student_courses.course_id as course_id
   FROM students, student_courses 
    WHERE student_courses.course_id = ${id} AND student_courses.student_id = students.id`;


  return NextResponse.json(data);
}
