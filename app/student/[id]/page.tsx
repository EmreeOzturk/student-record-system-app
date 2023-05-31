'use client';
import React, { useState, useEffect } from 'react';
import StudentPageContainer from '@/containers/StudentPageContainer';

const StudentPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [info, setInfo] = useState([]);
  const [events, setEvents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchStudentInfo = async (id: string) => {
      const res = await fetch(`/api/getStudentInfo/${id}`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setInfo(data);
      return data;
    };

    const fetchStudentEvents = async () => {
      const res = await fetch(`/api/getEvents`, {
        cache: 'no-cache',
      });
      const data = await res.json();
      setEvents(data);
      return data;
    };

    const fetchStudentCourses = async (id: string) => {
      const res = await fetch(`/api/getStudentCourses/${id}`, {
        cache: 'no-cache',
      });

      const data = await res.json();
      setCourses(data);

      return data;
    };

    const fetchStudentGrades = async (id: string) => {
      const res = await fetch(`/api/getStudentGrades/${id}`, {
        cache: 'no-cache',
      });

      const data = await res.json();
      setGrades(data);

      return data;
    };

    fetchStudentInfo(params.id);
    fetchStudentEvents();
    fetchStudentCourses(params.id);
    fetchStudentGrades(params.id);
  }, []);

  console.log(info);
  console.log(events);
  console.log(courses);

  return (
    <div>
      <StudentPageContainer
        id={params.id}
        events={events}
        courses={courses}
        grades={grades}
      />
    </div>
  );
};

export default StudentPage;
