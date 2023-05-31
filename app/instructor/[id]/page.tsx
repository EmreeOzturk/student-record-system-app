'use client';
import InstructorPageContainer from '@/containers/InstructorPageContainer';
import { useEffect, useState } from 'react';

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
    const fetchInstructorInfo = async (id: string) => {
      const res = await fetch(`/api/getInstructorInfo/${id}`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setInfo(data);
      return data;
    };
    const fetchInstructorCourses = async (id: string) => {
      const res = await fetch(`/api/getInstructorCourses/${id}`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setCourses(data);
      return data;
    };

    const fetchInstructorEvents = async () => {
      const res = await fetch(`/api/getEvents`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setEvents(data);
      return data;
    };

    fetchInstructorInfo(params.id);
    fetchInstructorCourses(params.id);
    fetchInstructorEvents();
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
