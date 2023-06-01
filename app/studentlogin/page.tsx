'use client';

import React from 'react';
import styles from '@/styles/Form.module.css';
import Layout from '@/components/layout/Layout';
import { SiMaildotru } from 'react-icons/si';
import { HiFingerPrint } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import useLoginStore from '@/stores/useLogin';

const StudentLoginPage = () => {
  const setIsLogin = useLoginStore((state: any) => state.setIsLogin);
  const [id, setId] = React.useState('');
  const router = useRouter();
  return (
    <Layout>
      <section className="w-3/4  mx-auto flex flex-col gap-2">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Student Login
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Login as a student to enroll in courses and track your progress.
          </p>
        </div>

        <form className="flex flex-col gap-5 focus:outline-none focus:border-none focus:ring-0">
          <div className={styles.input_group}>
            <input
              type="text"
              name="id"
              placeholder="Student ID"
              className={styles.input_text}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <SiMaildotru color="#999" />
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <HiFingerPrint color="#999" />
          </div>

          <div className="input-button">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                router.push(`/student/${id}`);
              }}
              className={styles.button}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default StudentLoginPage;
