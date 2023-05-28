import React from 'react';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // left sidebar
    <div>
      <div
        className="
        w-1/4
        h-screen
        bg-gray-300
        border-r-2
        border-gray-300
        flex
        flex-col
        justify-center
        items-center
        absolute
        top-0
        left-0
        z-10
        "
      >
        <div className="flex mb-10 flex-col justify-center items-center">
          <h1 className="text-2xl font-bold ">Student Name</h1>
        </div>
        <div>
          <ul className="flex flex-col gap-2 justify-center items-center">
            <li className="shadow__btn w-full text-center">
              Personal Information
            </li>
            <li className="shadow__btn w-full text-center">Grades</li>
            <li className="shadow__btn w-full text-center">Courses</li>
            <li className="shadow__btn w-full text-center">Events</li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default StudentLayout;
