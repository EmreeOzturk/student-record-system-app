import React from 'react';

const Courses = () => {
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
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Credit</th>
              <th className="px-4 py-2">Hours</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border px-4 py-2">courseName</td>
              <td className="border px-4 py-2">courseCode</td>
              <td className="border px-4 py-2">courseDescription</td>
              <td className="border px-4 py-2">courseCredit</td>
              <td className="border px-4 py-2">courseHours</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">courseName</td>
              <td className="border px-4 py-2">courseCode</td>
              <td className="border px-4 py-2">courseDescription</td>
              <td className="border px-4 py-2">courseCredit</td>
              <td className="border px-4 py-2">courseHours</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">courseName</td>
              <td className="border px-4 py-2">courseCode</td>
              <td className="border px-4 py-2">courseDescription</td>
              <td className="border px-4 py-2">courseCredit</td>
              <td className="border px-4 py-2">courseHours</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">courseName</td>
              <td className="border px-4 py-2">courseCode</td>
              <td className="border px-4 py-2">courseDescription</td>
              <td className="border px-4 py-2">courseCredit</td>
              <td className="border px-4 py-2">courseHours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
