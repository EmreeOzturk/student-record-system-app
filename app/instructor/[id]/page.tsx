'use client';
import InstructorPageContainer from '@/containers/InstructorPageContainer';
const API_PREFIX = 'http://localhost:3000/api';

const fetchInstructorInfo = async (id: string) => {
  const res = await fetch(`${API_PREFIX}/getInstructorInfo/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const fetchInstructorCourses = async (id: string) => {
  const res = await fetch(`${API_PREFIX}/getInstructorCourses/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const fetchInstructorEvents = async () => {
  const res = await fetch(`${API_PREFIX}/getEvents`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const InstructorPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const info = await fetchInstructorInfo(params.id);
  const courses = await fetchInstructorCourses(params.id);
  const events = await fetchInstructorEvents();

  return (
    <div>
      <InstructorPageContainer
        info={info[0]}
        courses={courses}
        events={events}
      />
    </div>
  );
};

export default InstructorPage;
