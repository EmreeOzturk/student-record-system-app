'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SignInButtonDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-md border border-black px-6 py-2 
  rounded-full black_btn relative "
      >
        Sign in
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
