'use client';
import { Course } from '@/types';
import React, { useEffect, useState } from 'react';
import { AiTwotoneEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
const Grades = ({ data }: { data: Course[] }) => {
  const router = useRouter();
  const [course, setCourse] = useState(0);
  const [grades, setGrades] = useState([] as any);
  const [editMode, setEditMode] = useState(false);
  const [whichStudent, setWhichStudent] = useState(0);
  const [info, setInfo] = useState({
    midterm_grade: 0,
    final_grade: 0,
    quiz: 0,
    homework: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const updateHandler = async (id: number) => {
    const res = await fetch(`/api/updateGrade/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    router.refresh();
  };

  useEffect(() => {
      const fetchGrades = async () => {
        const res = await fetch(`/api/grades/${course}`, {
          cache: 'no-cache',
        });
        const data = await res.json();
        console.log('useeffect' + data);
        setGrades(data);
      };
      fetchGrades();
  
  }, [course, editMode]);

  return (
    <div className="flex flex-col h-screen ml-48 justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        {data.map((course,index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCourse(course.id)}
          >
            {course.name}
          </button>
        ))}
      </div>
      <div>
        <table className="table-auto w-full rounded-lg overflow-hidden shadow-lg my-2">
          <thead className="bg-gradient-to-r from-white to-gray-600 text-black">
            <tr>
              <th className="border border-black px-4 py-2">Student Name</th>
              <th className="border border-black px-4 py-2">Student ID</th>
              <th className="border border-black px-4 py-2">Midterm</th>
              <th className="border border-black px-4 py-2">Final</th>
              <th className="border border-black px-4 py-2">Quiz</th>
              <th className="border border-black px-4 py-2">Homework</th>
              <th className="border border-black px-4 py-2">Average</th>
              <th className="border border-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {grades.map((grade: any) => (
              <tr key={grade.grade_id}>
                {editMode && whichStudent === grade.student_id ? (
                  <>
                    <td className="border border-black px-4 py-2">
                      {grade.first_name}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.student_id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        className="w-[50px]"
                        type="text"
                        name="midterm_grade"
                        onChange={handleChange}
                        value={info.midterm_grade}
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        className="w-[50px]"
                        type="text"
                        name="final_grade"
                        onChange={handleChange}
                        value={info.final_grade}
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        className="w-[50px]"
                        type="text"
                        name="quiz"
                        onChange={handleChange}
                        value={info.quiz}
                      />
                    </td>

                    <td className="border border-black px-4 py-2">
                      <input
                        className="w-[50px]"
                        type="text"
                        name="homework"
                        onChange={handleChange}
                        value={info.homework}
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      {(grade.midterm_grade +
                        grade.final_grade +
                        grade.quiz +
                        grade.homework) /
                        4}
                    </td>
                    <td className="border border-black px-4 py-2">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
                        onClick={() => {
                          updateHandler(grade.grade_id);
                          setEditMode(false);
                          setWhichStudent(0);
                        }}
                      >
                        <AiOutlineCheck />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          setEditMode(false);
                          setWhichStudent(0);
                        }}
                      >
                        <AiOutlineClose />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-black px-4 py-2">
                      {grade.first_name}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.student_id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.midterm_grade}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.final_grade}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.quiz}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {grade.homework}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {(grade.midterm_grade +
                        grade.final_grade +
                        grade.quiz +
                        grade.homework) /
                        4}
                    </td>
                    <td className="border border-black px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          setInfo({
                            midterm_grade: grade.midterm_grade,
                            final_grade: grade.final_grade,
                            quiz: grade.quiz,
                            homework: grade.homework,
                          });
                          setEditMode(true);
                          setWhichStudent(grade.student_id);
                        }}
                      >
                        <AiTwotoneEdit />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Grade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grades;
