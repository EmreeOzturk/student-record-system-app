import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const data = await prisma.$queryRaw`SELECT 
    instructors.id as id,
    instructors.first_name as first_name,
    instructors.last_name as last_name,
    instructors.birth_date as birth_date,
    gender as gender,
    email as email,
    phone as phone,
    departments.name as department_name
    FROM instructors , departments WHERE instructors.id = ${id} AND instructors.department_id = departments.id`;

    console.log("dasdadwqlodşkqwdq"+data)
  return NextResponse.json(data);
}
