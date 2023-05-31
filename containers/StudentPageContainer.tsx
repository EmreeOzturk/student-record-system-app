'use client';

import React, { useEffect, useState } from 'react';
import useStudentMenuStore from '@/stores/useStudentStore';
import Events from '@/components/common/student/Events';
import PersonalInformation from '@/components/common/student/PersonalInfo';
import Courses from '@/components/common/student/Courses';
import Grades from '@/components/common/student/Grades';

const StudentPageContainer = ({
  id,
  events,
  courses,
  grades,
}: {
  id: any;
  events: any;
  courses: any;
  grades: any;
}) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchStudentInfo = async (id: string) => {
      const res = await fetch(`/api/getStudentInfo/${id}`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setInfo(data);
      return data;
    };
    fetchStudentInfo(id);
  }, []);
  console.log(info);

  const menuName = useStudentMenuStore((state: any) => state.menuName);
  console.log(menuName);

  return (
    <div>
      {menuName === 'none' && <></>}
      {menuName === 'Personal Information' && (
        <PersonalInformation data={info[0]} />
      )}
      {menuName === 'Grades' && <Grades data={grades} />}
      {menuName === 'Courses' && <Courses data={courses} />}
      {menuName === 'Events' && <Events data={events} />}
    </div>
  );
};

export default StudentPageContainer;
