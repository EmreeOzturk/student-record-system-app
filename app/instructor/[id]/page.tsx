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
  const info = fetchInstructorCourses(params.id);
  const courses = fetchInstructorCourses(params.id);
  const events = fetchInstructorEvents();

  const [infodata, coursesdata, eventsdata] = await Promise.all([
    info,
    courses,
    events,
  ]);

  return (
    <div>
      <h1>asdasdasdsa</h1>
    </div>
  );
};

export default InstructorPage;
