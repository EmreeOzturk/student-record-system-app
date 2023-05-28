import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/public/vercel.svg';
import SignInButtonDropdown from './SignInButtonDropdown';
const Header = () => {
  return (
    <nav
      className="
        flex w-full h-20 text-black fixed top-0
    "
    >
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <div className="logo">
          <Link href="/">
            <Image
              src={icon}
              alt="icon"
              width={150}
              height={150}
              sizes="(max-width: 640px) 100vw,"
            />
          </Link>
        </div>
        <div>
          <SignInButtonDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
