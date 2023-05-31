'use client';
import { Student } from '@/types';
import { useState } from 'react';

export default function PersonalInformation({ data }: { data: Student }) {

  
  console.log(data);
  const [editMode, setEditMode] = useState(false);
  const [info, setInfo] = useState<any>({
    'Student Id': data?.id,
    'First Name': data?.first_name,
    'Last Name': data?.last_name,
    Email: data?.email,
    Address: data?.address,
    Phone: data?.phone,
    'Birth Date':
      new Date(data?.birth_date).toLocaleDateString() ?? 'Not Available',
    Gender: data?.gender === 'f' ? 'Female' : 'Male',
    'Enrollment Date':
      new Date(data?.enrollment_date).toLocaleDateString() ?? 'Not Available',
    'Department Name': data?.department_name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const res = await fetch(`/api/updateStudentInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
  };

  return (
    <div className="flex w-[800px] ml-40 items-center justify-center h-screen">
      <div className="w-full ml-40 bg-gray-200 rounded-xl shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          Personal Information
        </h1>
        {Object.keys(info).map((key) => (
          <div key={key} className="flex items-center border-b border-gray-400">
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
                onClick={() => {
                  onSubmit();
                  setEditMode(false);
                }}
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
