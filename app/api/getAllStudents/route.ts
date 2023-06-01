import { StudentAndHours } from '@/types';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const data: any = await prisma.$queryRaw`
    SELECT students.id, students.first_name, students.last_name, SUM(courses.hours)
    as total_hours
    FROM students
    JOIN student_courses ON students.id = student_courses.student_id
    JOIN courses ON student_courses.course_id = courses.id
    WHERE student_courses.semester = 2
    GROUP BY students.id, students.first_name, students.last_name
    `;

    const response = data.map((student: StudentAndHours) => {
    return {
        id: student.id,
        first_name: student.first_name,
        last_name: student.last_name,
        total_hours: Number(student.total_hours),
    };
    });

    return NextResponse.json(response);
}
