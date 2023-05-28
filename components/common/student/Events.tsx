import React from 'react';

const Events = () => {
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
            <tr>
              <td className="border  px-4 py-2">eventTitle</td>
              <td className="border  px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eventTitle</td>
              <td className="border px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eventTitle</td>
              <td className="border px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eventTitle</td>
              <td className="border px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eventTitle</td>
              <td className="border px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">eventTitle</td>
              <td className="border px-4 py-2">eventDescription</td>
              <td className="border px-4 py-2">eventDate</td>
              <td className="border px-4 py-2">eventLocation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
