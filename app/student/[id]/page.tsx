import React from 'react';
import StudentPageContainer from '@/containers/StudentPageContainer';
const API_PREFIX = 'http://localhost:3000/api';

const StudentPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [info, events, courses, grades] = await Promise.all([
    fetch(`${API_PREFIX}/getStudentInfo/${params.id}`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
    fetch(`${API_PREFIX}/getEvents`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
    fetch(`${API_PREFIX}/getStudentCourses/${params.id}`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
    fetch(`${API_PREFIX}/getStudentGrades/${params.id}`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
  ]);

  console.log(courses);
  return (
    <div>
      <StudentPageContainer info={info[0]} events={events} courses={courses} grades={grades}/>
    </div>
  );
};

export default StudentPage;
