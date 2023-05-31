import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json().then((data) => {
    return data;
  });


  console.log('body data' + body);
  const data = await prisma.$queryRaw`
    UPDATE students SET
    first_name = ${body?.['First Name']},
    last_name = ${body?.['Last Name']},
    gender = ${body?.['Gender'] === 'Female' ? 'f' : 'm'},
    email = ${body?.['Email']},
    phone = ${body?.['Phone']}
    
    WHERE id = ${body?.['Student Id']}
    `;

  return NextResponse.json({ body });
}
