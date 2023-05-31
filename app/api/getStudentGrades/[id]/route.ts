import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const data = await prisma.$queryRaw`SELECT
    grades.student_id as id,
    courses.name as course_name,
    grades.midterm_grade as midterm_grade,
    grades.final_grade as final_grade,
    grades.quiz as quiz,
    grades.homework as homework
    FROM grades,courses 
    WHERE grades.student_id = ${id} 
    AND grades.course_id = courses.id
    `;


  return NextResponse.json(data);
}
