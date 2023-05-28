import React from 'react';
import styles from '@/styles/Layout.module.css';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen my-auto items-center justify-center h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 grid  lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImage}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="flex flex-col items-center justify-evenly right rounded-r-md bg-gray-300 ">
          <div className="text-center py-10 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
