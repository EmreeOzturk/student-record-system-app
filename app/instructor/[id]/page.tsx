import Events from '@/components/common/instructor/Events';
import PersonalInformation from '@/components/common/instructor/PersonalInfo';
const API_PREFIX = 'http://localhost:3000/api';
// const getInstructorData = async (id: string) => {
//   const res = await fetch(`${API_PREFIX}/getInstructorInfo/${id}`, {
//     cache: 'no-cache',
//   });
//   const data = await res.json();
//   return data;
// };

const getEvents = async () => {
  const res = await fetch(`${API_PREFIX}/getEvents`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  // console.log(data);
  return data;
};

const InstructorPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  // const info = await getInstructorData(params.id);
  const events = await getEvents();
  // console.log(events);
  return (
    <div>
      {/* <PersonalInformation data={info[0]} /> */}
      <Events data={events} />
    </div>
  );
};

export default InstructorPage;
