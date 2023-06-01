'use client';
import { useState } from 'react';

const AddInstructor = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birth_date: Date(),
    gender: '',
    email: '',
    phone: '',
    department_id: 0,
  });
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/createInstructor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-300">
      <form onSubmit={submitHandler} className="w-full border border-slate-600 rounded-xl max-w-lg p-4 space-y-4">
        <div className="flex flex-wrap">
          <label
            className="block w-full sm:w-1/2 pr-4 pl-4"
            htmlFor="firstName"
          >
            First Name
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="text"
              id="firstName"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
          </label>
          <label className="block w-full sm:w-1/2 pl-4 pr-4" htmlFor="lastName">
            Last Name
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="text"
              id="lastName"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </label>
        </div>
        <div className="flex flex-wrap">
          <label
            className="block w-full sm:w-1/2 pr-4 pl-4"
            htmlFor="birthdate"
          >
            Birthdate
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="date"
              id="birthdate"
              value={formData.birth_date}
              onChange={(e) =>
                setFormData({ ...formData, birth_date: e.target.value })
              }
            />
          </label>
          <label className="block w-full sm:w-1/2 pl-4 pr-4" htmlFor="gender">
            Gender
            <select
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              id="gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gender: e.target.value,
                })
              }
            >
              <option value="">Select...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </label>
        </div>
        <label className="block w-full pr-4 pl-4" htmlFor="email">
          Email
          <input
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
        </label>
        <label className="block w-full pr-4 pl-4" htmlFor="phone">
          Phone
          <input
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />
        </label>
        <label className="block w-full pr-4 pl-4" htmlFor="department_id">
          Department Name
          <select
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            id="department_id"
            value={formData.department_id}
            onChange={(e) =>
              setFormData({
                ...formData,
                department_id: parseInt(e.target.value),
              })
            }
          >
            <option value="">Select...</option>
            <option value="1">Computer Engineering</option>
            <option value="2">Machine Engineering</option>
            <option value="3">Chemical Engineering</option>
          </select>
        </label>
        <div className="block w-full pr-4 pl-4">
          <button
            className="w-full sm:w-auto block bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstructor;
