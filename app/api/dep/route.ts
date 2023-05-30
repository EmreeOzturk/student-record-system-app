import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = 'example dep';
  const fac_id = 1;

  await prisma.$executeRaw`INSERT INTO departments (name, faculty_id) VALUES (${name}, ${fac_id})`;
}
export { handler as POST };
