import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(
    req: Request,
    { params }: { params: { id: string } },
) {
    const id = parseInt(params.id);
    const body = await req.json();
    console.log(body);
    const data = await prisma.$queryRaw`UPDATE grades
    SET midterm_grade = ${parseInt(body.midterm_grade)},
    final_grade = ${parseInt(body.final_grade)}, 
    quiz = ${parseInt(body.quiz)}, 
    homework = ${parseInt(body.homework)}
    WHERE id = ${id}`;
    return NextResponse.json(data);
}
