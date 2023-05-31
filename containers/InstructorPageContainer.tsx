'use client';
import React from 'react';
import Events from '@/components/common/instructor/Events';
import PersonalInformation from '@/components/common/instructor/PersonalInfo';
import Courses from '@/components/common/instructor/Courses';
import Grades from '@/components/common/instructor/Grades';
import useInstructorMenuStore from '@/stores/useInstructorStore';
const InstructorPageContainer = ({
  info,
  events,
  courses,
}: {
  info: any;
  events: any;
  courses: any;
}) => {
  const menuName = useInstructorMenuStore((state: any) => state.menuName);
  return (
    <div>
      {menuName === 'none' && <h1>asdasdsadas</h1>}
      {menuName === 'Personal Information' && (
        <PersonalInformation data={info} />
      )}
      {menuName === 'Grades' && <Grades data={courses} />}
      {menuName === 'Courses' && <Courses data={courses} />}
      {menuName === 'Events' && <Events data={events} />}
    </div>
  );
};

export default InstructorPageContainer;
