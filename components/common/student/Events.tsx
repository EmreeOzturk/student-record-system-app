import { Events } from '@/types';
import React from 'react';

const Events = ({ data }: { data: Events[] }) => {
  console.log(data);
  return (
    <div
      className="
    w-screen
    h-screen
    flex
    justify-center
    items-center
    "
    >
      <div>
        <table className="table-auto w-full ml-40 rounded-lg overflow-hidden shadow-lg my-2">
          <thead className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <tr>
              <th className="border border-black px-4 py-2">Event Title</th>
              <th className="border border-black px-4 py-2">
                Event Description
              </th>
              <th className="border border-black px-4 py-2">Event Date</th>
              <th className="border border-black px-4 py-2">Event Location</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((event) => (
              <tr key={event.title}>
                <td className="border border-black text-center ">
                  {event.title}
                </td>
                <td className="border border-black text-center ">
                  {event.description}
                </td>

                <td className="border border-black text-center ">
                  {new Date(event.event_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
                <td className="border border-black text-center ">
                  {event.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
