'use client';
import { useState } from 'react';

export default function PersonalInformation() {
  const [editMode, setEditMode] = useState(false);
  const [info, setInfo] = useState({
    studentId: '12345',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    birthDate: '1990-01-01',
    address: '123 Street, City, Country',
    email: 'john.doe@example.com',
    phone: '+123456789',
    enrollmentDate: '2018-09-01',
    departmentName: 'Computer Science',
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-[800px] ml-40 items-center justify-center h-screen">
      <div className="w-full ml-40 bg-white rounded-xl shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          Personal Information
        </h1>
        {Object.keys(info).map((key) => (
          <div key={key} className="flex items-center border-b border-gray-200">
            <div className="py-2 text-gray-600 text-lg">{key}</div>
            {editMode ? (
              <input
                className="ml-auto py-1 px-2 rounded-lg border-2 border-blue-300 focus:border-blue-500"
                name={key}
                value={info[key]}
                onChange={handleChange}
              />
            ) : (
              <div className="ml-auto py-2 text-gray-800 text-lg">
                {info[key]}
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-end mt-4">
          {editMode ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => setEditMode(false)}
              >
                Submit
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
