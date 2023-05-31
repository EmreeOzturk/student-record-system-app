import InstructorPageContainer from '@/containers/InstructorPageContainer';
const API_PREFIX = 'http://localhost:3000/api';


const InstructorPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {


  const [info, events, courses] = await Promise.all([
    fetch(`${API_PREFIX}/getInstructorInfo/${params.id}`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
    fetch(`${API_PREFIX}/getEvents`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
    fetch(`${API_PREFIX}/getInstructorCourses/${params.id}`, {
      cache: 'no-cache',
    }).then((res) => res.json()),
  ]);

  return (
    <div>
      <InstructorPageContainer
        info={info[0]}
        events={events}
        courses={courses}
      />
    </div>
  );
};

export default InstructorPage;
