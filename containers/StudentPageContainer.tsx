'use client';

import React from 'react';
import useStudentMenuStore from '@/stores/useStudentStore';
import Events from '@/components/common/student/Events';
import PersonalInformation from '@/components/common/student/PersonalInfo';
import Courses from '@/components/common/student/Courses';
import Grades from '@/components/common/student/Grades';

const StudentPageContainer = ({
  info,
  events,
  courses,
  grades,
}: {
  info: any;
  events: any;
  courses: any;
  grades: any;
}) => {
  const menuName = useStudentMenuStore((state: any) => state.menuName);
  console.log(menuName);

  return (
    <div>
      {menuName === 'Personal Information' && (
        <PersonalInformation data={info} />
      )}
      {menuName === 'Grades' && <Grades data={grades} />}
      {menuName === 'Courses' && <Courses data={courses} />}
      {menuName === 'Events' && <Events data={events} />}
    </div>
  );
};

export default StudentPageContainer;
