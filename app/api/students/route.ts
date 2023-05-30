import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const students = await prisma.students.findMany();
      console.log(students);
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Unable to retrieve students' });
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export { handler as GET };
