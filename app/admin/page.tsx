import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import Link from 'next/link';
const AdminPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-400 gap-10">
      <Link
        href="/admin/add-instructor"
        className="flex justify-center border border-gray-500 items-center hover:scale-105 transition-all flex-col h-40 w-40 rounded-lg bg-transparent cursor-pointer"
      >
        <AiOutlineUserAdd size={50} />
        Add Instructor
      </Link>
      <Link
        href="/admin/students"
        className="flex justify-center border border-gray-500 items-center hover:scale-105 flex-col transition-all h-40 w-40 rounded-lg bg-transparent cursor-pointer"
      >
        <GrView size={50} />
        View Students
      </Link>
    </div>
  );
};

export default AdminPage;
