// events ekleyip silme ve düzenleme işlemleri yapılacak
'use client';
import { Events } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';
const Events = ({ data }: { data: Events[] }) => {
  const [editMode, setEditMode] = useState(false);
  const [which, setWhich] = useState(0);
  const [info, setInfo] = useState({
    'Event Title': '',
    'Event Description': '',
    'Event Date': '',
    'Event Location': '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const updateHandler = async (id: number) => {
    const res = await fetch(`/api/updateEvent/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    router.refresh();
  };

  const router = useRouter();
  const deleteHandler = async (id: number) => {
    const res = await fetch(`/api/deleteEvent/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    router.refresh();
    console.log(data);
  };
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
          <thead className="bg-gradient-to-r from-white to-gray-600 text-black">
            <tr>
              <th className="border border-black px-4 py-2">Event Title</th>
              <th className="border border-black px-4 py-2">
                Event Description
              </th>
              <th className="border border-black px-4 py-2">Event Date</th>
              <th className="border border-black px-4 py-2">Event Location</th>
              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-transparent ">
            {data.map((event) => (
              <tr key={event.title}>
                {editMode && which === event.id ? (
                  <>
                    <td className="border border-black text-center ">
                      <input
                        className="border border-black w-[100px] "
                        type="text"
                        name="Event Title"
                        value={info['Event Title']}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border border-black text-center ">
                      <input
                        className="border border-black "
                        type="text"
                        name="Event Description"
                        value={info['Event Description']}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border border-black text-center ">
                      <input
                        className="border border-black "
                        type="date"
                        name="Event Date"
                        value={info['Event Date']}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="border border-black  text-center ">
                      <input
                        className="border border-black w-[100px]"
                        type="text"
                        name="Event Location"
                        value={info['Event Location']}
                        onChange={handleChange}
                      />
                    </td>

                    <td className="text-center border border-black px-4 py-2 flex gap-2 justify-center items-center">
                      <button
                        onClick={() => {
                          updateHandler(event.id);
                          setEditMode(false);
                          setWhich(0);
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiOutlineCheck />
                      </button>
                      <button
                        onClick={() => {
                          setEditMode(false);
                          setInfo({
                            'Event Title': '',
                            'Event Description': '',
                            'Event Date': '',
                            'Event Location': '',
                          });
                          setWhich(0);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiOutlineClose />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-black px-4 py-2">
                      {event.title}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {event.description}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {new Date(event.event_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {event.location}
                    </td>
                    <td className="text-center border border-black px-4 py-2 flex gap-2 justify-center items-center">
                      <button
                        onClick={() => {
                          setWhich(event.id);
                          setInfo({
                            'Event Title': event.title,
                            'Event Description': event.description,
                            'Event Date': new Date(
                              event.event_date,
                            ).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }),
                            'Event Location': event.location,
                          });
                          setEditMode(true);
                        }}
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiTwotoneEdit />
                      </button>
                      <button
                        onClick={() => {
                          deleteHandler(event.id);
                        }}
                        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                      >
                        <AiTwotoneDelete />
                      </button>
                    </td>
                  </>
                )}

                {/* <td className="border border-black px-4 py-2">
                  {event.description}
                </td>
                <td className="border border-black px-4 py-2">
                  {new Date(event.event_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
                <td className="border border-black px-4 py-2">
                  {event.location}
                </td> */}
                {/* {editMode ? (
                  <td className="text-center border border-black px-4 py-2 flex gap-2 justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <AiOutlineCheck />
                    </button>
                    <button
                      onClick={() => {
                        setEditMode(false);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiOutlineClose />
                    </button>
                  </td>
                ) : ( */}

                {/* )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
