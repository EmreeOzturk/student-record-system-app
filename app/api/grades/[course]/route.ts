import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { course: string } },
) {
  const courseId = parseInt(params.course);
  const data = await prisma.$queryRaw`
            SELECT
            students.id as student_id,
            students.first_name as first_name,
            students.last_name as last_name,
            grades.id as grade_id,
            grades.midterm_grade as midterm_grade,
            grades.final_grade as final_grade,
            grades.quiz as quiz,
            grades.homework as homework,
            grades.average_grade as average_grade,
            grades.course_id as course_id,
            grades.student_id as student_id
        FROM students, grades
        WHERE grades.course_id = ${courseId} AND students.id = grades.student_id`;

  return NextResponse.json(data);
}
