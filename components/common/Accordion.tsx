'use client';
import { Course } from '@/types';
import { useState, useEffect } from 'react';

export default function CourseAccordion({ course }: { course: Course }) {
  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const fetchCoursesStudents = async (id: number) => {
    const res = await fetch(`/api/getCourseStudents/${id}`);
    const data = await res.json();
    setStudents(data);
    console.log(data);
  };
  useEffect(() => {
    fetchCoursesStudents(course.id);
  }, []);

  return (
    <div className="border  rounded-xl border-black p-4 ml-60 hover:bg-gray-100">
      <div
        className="flex justify-between items-center cursor-pointer w-[700px]  transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-center w-1/5">{course.name}</div>
        <div className="text-center w-1/5">{course.code}</div>
        <div className="text-center w-1/5">{course.description}</div>
        <div className="text-center w-1/5">{course.credit}</div>
        <div className="text-center w-1/5">{course.hours}</div>
      </div>
      {isOpen && (
        <div className="mt-4">
          {students.map((student: any) => (
            <div key={student.id} className="flex justify-between items-center">
              <div className="text-center w-1/5">{student.first_name}</div>
              <div className="text-center w-1/5">{student.last_name}</div>
              <div className="text-center w-1/5">{student.gender === 'f' ? 'Female' : 'Male'}</div>
              <div className="text-center w-1/5">
                {new Date(student.birth_date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
