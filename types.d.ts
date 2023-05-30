import { Events } from '@/components/common/student/Events';
import { NextResponse, NextRequest } from 'next/server';
export type API_PARAMS = {
  NextResponse: NextResponse;
  NextRequest: NextRequest;
};

type Instructor = {
  id: number;
  first_name: string;
  last_name: number;
  birth_date: Date;
  gender: string;
  email: string;
  phone: string;
  department_id: number;
  department_name: string;
};

type Events = {
  id: number;
  title: string;
  description: string;
  event_date: Date;
  location: string;
};
