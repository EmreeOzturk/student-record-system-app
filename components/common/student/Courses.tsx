import { StudentCourse } from '@/types';
import React from 'react';

const Courses = ({ data }: { data: StudentCourse[] }) => {
  return (
    <div
      className="
  h-screen
  flex
  justify-center
  items-center
  "
    >
      <div>
        <table className="table-auto w-[800px] ml-64 rounded-lg overflow-hidden shadow-lg my-2">
          <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Course Id</th>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Credit</th>
              <th className="px-4 py-2">Hours</th>
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((course) => (
              <tr key={course.id}>
                <td className="border px-4 py-2">{course.id}</td>
                <td className="border px-4 py-2">{course.name}</td>
                <td className="border px-4 py-2">{course.code}</td>
                <td className="border px-4 py-2">{course.description}</td>
                <td className="border px-4 py-2">{course.credit}</td>
                <td className="border px-4 py-2">{course.hours}</td>
                <td className="border px-4 py-2">{course.semester}</td>
                <td className="border px-4 py-2">{course.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
