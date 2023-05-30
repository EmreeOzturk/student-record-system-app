'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { SlLogin } from 'react-icons/sl';
const SignInButtonDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" gap-2 border border-black px-6 py-2 
  rounded-full black_btn relative "
      >
        <SlLogin /> Sign in
      </button>

      {isOpen && (
        <div className="dropdown">
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="dropdown_link"
            href="/studentlogin"
          >
            Student
          </Link>

          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="dropdown_link"
            href="/instructorlogin"
          >
            Instructor
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignInButtonDropdown;
