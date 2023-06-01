import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json().then((data) => {
    return data;
  });
  const [day, month, year] = body?.['Birth Date']
    .split('T')[0]
    .toString()
    .split('.');

  const newBirthDate = year + '-' + month + '-' + day;

  const data = await prisma.$queryRaw`
    UPDATE instructors SET
    first_name = ${body?.['First Name']},
    last_name = ${body?.['Last Name']},
    birth_date = ${new Date(newBirthDate)},
    gender = ${body?.['Gender']},
    email = ${body?.['Email']},
    phone = ${body?.['Phone']}
    WHERE id = ${body?.['Instructor id']}
    `;

  return NextResponse.json({ data });
}
