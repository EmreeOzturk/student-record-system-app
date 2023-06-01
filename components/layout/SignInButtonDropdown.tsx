'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SlLogin, SlLogout } from 'react-icons/sl';
import useLoginStore from '@/stores/useLogin';
const SignInButtonDropdown = () => {
  const isLogin = useLoginStore((state: any) => state.isLogin);
  const setIsLogin = useLoginStore((state: any) => state.setIsLogin);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      {isLogin ? (
        <button
          onClick={() => {
            router.push('/');
            setIsLogin(false);
          }}
          className=" gap-2 border border-black px-6 py-2 
        rounded-full black_btn relative "
        >
          <SlLogout /> Sign out
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" gap-2 border border-black px-6 py-2 
  rounded-full black_btn relative "
        >
          <SlLogin /> Sign in
        </button>
      )}

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
