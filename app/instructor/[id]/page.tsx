'use client';
import InstructorPageContainer from '@/containers/InstructorPageContainer';
import { useEffect, useState } from 'react';
const fetchInstructorInfo = async (id: string) => {
  const res = await fetch(`/getInstructorInfo/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const fetchInstructorCourses = async (id: string) => {
  const res = await fetch(`/getInstructorCourses/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
};

const fetchInstructorEvents = async () => {
  const res = await fetch(`/getEvents`, {
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
  const [info, setInfo] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchInstructorInfo(params.id).then((data) => setInfo(data));
    fetchInstructorCourses(params.id).then((data) => setCourses(data));
    fetchInstructorEvents().then((data) => setEvents(data));
  }, []);

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
