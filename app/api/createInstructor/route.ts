import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json().then((data) => {
    return data;
  });

  const data = await prisma.$queryRaw`INSERT INTO instructors
    (first_name, last_name, birth_date, gender ,email, phone, department_id) 
    VALUES (${body?.['first_name']}, ${body?.['last_name']}, 
    ${new Date(body?.['birth_date'])}, ${body?.['gender']},
     ${body?.['email']} , ${body?.['phone']}, ${body?.['department_id']})`;

  return NextResponse.json(data);
}
