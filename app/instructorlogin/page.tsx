'use client';

import React from 'react';
import styles from '@/styles/Form.module.css';
import Layout from '@/components/layout/Layout';
import { SiMaildotru } from 'react-icons/si';
import { HiFingerPrint } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import useLoginStore from '@/stores/useLogin';
const InstructorLoginPage = () => {
  const setIsLogin = useLoginStore((state: any) => state.setIsLogin);
  const [id, setId] = React.useState('');
  const router = useRouter();
  return (
    <Layout>
      <section className="w-3/4  mx-auto flex flex-col gap-2">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Instructor Login
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Login as an instructor to create courses and manage your students.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="number"
              name="id"
              placeholder="Instructor ID"
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
                router.push(`/instructor/${id}`);
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

export default InstructorLoginPage;
