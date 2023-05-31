'use client';
import React from 'react';
import useStudentStore from '@/stores/useStudentStore';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const menuName = useStudentStore((state: any) => state.menuName);
  const setMenuName = useStudentStore((state: any) => state.setMenuName);
  console.log(menuName);
  return (
    // left sidebar
    <div>
      <div
        className="
        w-1/4
        h-screen
        ml-6
        border-r-2
        border-black
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
        <div>
          <ul className="flex flex-col gap-2 justify-center items-center">
            <li
              onClick={() => setMenuName('Personal Information')}
              className={
                menuName === 'Personal Information'
                  ? 'menuButton w-full text-center !bg-gray-400'
                  : 'menuButton w-full text-center'
              }
            >
              Personal Information
            </li>
            <li
              onClick={() => setMenuName('Grades')}
              className={
                menuName === 'Grades'
                  ? 'menuButton w-full text-center !bg-gray-400'
                  : 'menuButton w-full text-center'
              }
            >
              Grades
            </li>
            <li
              onClick={() => setMenuName('Courses')}
              className={
                menuName === 'Courses'
                  ? 'menuButton w-full text-center !bg-gray-400'
                  : 'menuButton w-full text-center'
              }
            >
              Courses
            </li>
            <li
              onClick={() => setMenuName('Events')}
              className={
                menuName === 'Events'
                  ? 'menuButton w-full text-center !bg-gray-400'
                  : 'menuButton w-full text-center'
              }
            >
              Events
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default StudentLayout;
