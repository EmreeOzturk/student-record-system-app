import React from 'react';
import Events from '@/components/common/student/Events';
import Courses from '@/components/common/student/Courses';
import Grades from '@/components/common/student/Grades';
import PersonalInformation from '@/components/common/student/PersonalInfo';
const StudentPage = () => {
  return (
    <div>
      {/* <Events /> */}
      {/* <Courses /> */}
      <Grades />
      {/* <PersonalInformation /> */}
    </div>
  );
};

export default StudentPage;
