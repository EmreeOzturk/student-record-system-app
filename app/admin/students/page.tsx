'use client';
import { StudentAndHours } from '@/types';
import React, { useEffect, useState } from 'react';

const ViewStudents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/getAllStudents')
      .then((res) => res.json())
      .then((data) => setData(data));

    console.log(data);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-400 gap-10">
      <table className="table-auto bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-gray-600">ID</th>
            <th className="px-4 py-2 text-gray-600">First Name</th>
            <th className="px-4 py-2 text-gray-600">Last Name</th>
            <th className="px-4 py-2 text-gray-600">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student: StudentAndHours) => (
            <tr
              key={student.id}
              className="text-center hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.first_name}</td>
              <td className="border px-4 py-2">{student.last_name}</td>
              <td className="border px-4 py-2">{student.total_hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
