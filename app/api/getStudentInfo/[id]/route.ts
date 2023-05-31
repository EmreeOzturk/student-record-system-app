import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
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
    students.email as email,
    students.phone as phone,
    students.address as address,
    students.enrollment_date as enrollment_date,
    departments.name as department_name

    FROM students , departments 
    WHERE students.id = ${id} AND students.department_id = departments.id`;

  return NextResponse.json(data);
}
