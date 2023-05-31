'use client';
//verdiği derslerin listelendiği sayfa
//derse tıkladığında accordion şeklinde açılıp öğrenciler listelenecek
// ayrıca derse öğrenci ekleme işlemi yapılacak
import { Course } from '@/types';
import React, { useState, useEffect } from 'react';
import CourseAccordion from '../Accordion';
const Courses = ({ data }: { data: Course[] }) => {
  const students = [
    { id: 1, name: 'Öğrenci 1' },
    { id: 2, name: 'Öğrenci 2' },
    { id: 3, name: 'Öğrenci 3' },
  ];

  return (
    <div
      className="
      w-screen
      h-screen
      flex
      justify-center
      flex-col
      items-center"
    >
      {/* <div>
        <table className="table-auto w-full ml-40 rounded-lg overflow-hidden shadow-lg my-2">
          <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Credit</th>
              <th className="px-4 py-2">Hours</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((course) => (
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="bg-red-200 p-4 flex items-center justify-between mb-10 gap-8 w-[732px] border border-black rounded-xl h-16 ml-60">
        <h3>Course Name</h3>
        <h3>Course Code</h3>
        <h3>Course Description</h3>
        <h3>Course Credit</h3>
        <h3>Course Hours</h3>
      </div>
      <div>
        {data.map((course) => (
          <CourseAccordion key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

{
  /* <tr
className="hover:bg-red-300"
onClick={() => setShowMore(!showMore)}
key={course.id}
>
<td className="border border-black text-center ">
  {course.name}
</td>
<td className="border border-black text-center ">
  {course.code}
</td>
<td className="border border-black text-center ">
  {course.description}
</td>
<td className="border border-black text-center ">
  {course.credit}
</td>
<td className="border border-black text-center ">
  {course.hours}
</td>
</tr> */
}
