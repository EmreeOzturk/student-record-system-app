import { StudentGrades } from '@/types';
import React from 'react';

const Grades = ({ data }: { data: StudentGrades[] }) => {
  return (
    <div
      className="
w-screen
h-screen
flex
justify-center
items-center
"
    >
      <div>
        <table className="table-auto w-full ml-40 rounded-lg overflow-hidden shadow-lg my-2">
          <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Midterm Grade</th>
              <th className="px-4 py-2">Final Grade</th>
              <th className="px-4 py-2">Quiz</th>
              <th className="px-4 py-2">Homework</th>
              <th className="px-4 py-2">Average Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((grade) => (
              <tr key={grade.id}>
                <td className="border px-4 py-2">{grade.course_name}</td>
                <td className="border px-4 py-2">{grade.midterm_grade}</td>
                <td className="border px-4 py-2">{grade.final_grade}</td>
                <td className="border px-4 py-2">{grade.quiz}</td>
                <td className="border px-4 py-2">{grade.homework}</td>
                <td className="border px-4 py-2">
                  {(grade.midterm_grade +
                    grade.final_grade +
                    grade.quiz +
                    grade.homework) /
                    4}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
