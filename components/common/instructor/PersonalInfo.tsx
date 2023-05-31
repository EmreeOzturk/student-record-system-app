'use client';
import { Instructor } from '@/types';
import { useState } from 'react';

export default function PersonalInformation({ data }: { data: Instructor }) {
  const [editMode, setEditMode] = useState(false);
  const [info, setInfo] = useState<any>({
    'Instructor id': data?.id,
    'First Name': data?.first_name,
    'Last Name': data?.last_name,
    Gender: data?.gender,
    'Birth Date':
      new Date(data?.birth_date).toLocaleDateString() ?? 'Not Available',
    Email: data?.email,
    Phone: data?.phone,
    'Department Name': data?.department_name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const res = await fetch(`/api/updateInstructorInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
  };

  return (
    <div className="h-screen flex items-center justify-center ml-40">
      <div className="card ">
        <div className="content">
          <h1 className="heading">Instructor Information</h1>
          {Object.keys(info).map((key) => (
            <div className="flex items-center justify-around gap-4" key={key}>
              <div className="flex items-center justify-around">{key}</div>
              {editMode ? (
                <input
                  className="ml-auto py-1 px-2 rounded-lg border-2 border-blue-300 focus:border-blue-500"
                  name={key}
                  value={info[key]}
                  onChange={handleChange}
                />
              ) : (
                <div>{info[key]}</div>
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
    </div>
  );
}
