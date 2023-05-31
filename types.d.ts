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
type Student = {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: string;
  email: string;
  phone: string;
  address: string;
  enrollment_date: Date;
  department_name: string;
};

type StudentCourse = {
  student_id: number;
  course_id: number;
  semester: number;
  year: number;
  id: number;
  code: string;
  name: string;
  description: string;
  credit: number;
  hours: number;
  department_id: number;
  sub_course_id: number;
};

type StudentGrades = {
  id: number;
  course_name: string;
  midterm_grade: number;
  final_grade: number;
  quiz: number;
  homework: number;
};
type Events = {
  id: number;
  title: string;
  description: string;
  event_date: Date;
  location: string;
};

type StudentAndHours = {
  id: number;
  first_name: string;
  last_name: string;
  total_hours: number;
}

type InstructorCourses = {
  course_id: number;
};
type Course = {
  id: number;
  code: string;
  name: string;
  description: string;
  credit: number;
  hours: number;
  department_id: number;
  sub_course_id: number;
};
type InstructorStore = {
  state: {
    menuName: string;
    setMenuName: (menuName: string) => void;
  };
};
