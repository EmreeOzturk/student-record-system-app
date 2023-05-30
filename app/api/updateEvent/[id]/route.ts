import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const body = await req.json().then((data) => {
    return data;
  });

  const [day, month, year] = body?.['Event Date']
    .split('T')[0]
    .toString()
    .split('.');

  const newEventDate = year + '-' + month + '-' + day;
  const data = await prisma.$queryRaw`UPDATE events SET
    title = ${body?.['Event Title']},
    description = ${body?.['Event Description']},
    event_date = ${new Date(newEventDate)},
    location = ${body?.['Event Location']}
    WHERE id = ${id}`;

  return NextResponse.json(data);
}
