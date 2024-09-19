import React from 'react';

const StudyMaterialList = () => {
  
  const studyMaterials = [
    {
      title: 'Physics Chapter 1',
      class: '10',
      subject: 'Physics',
      description: 'Introduction to Mechanics',
      dateAdded: '2024-09-10',
      addedBy: 'Mr. John Doe',
    },
    {
      title: 'Math Algebra',
      class: '9',
      subject: 'Mathematics',
      description: 'Basic Algebra Concepts',
      dateAdded: '2024-09-12',
      addedBy: 'Ms. Jane Smith',
    },
    {
      title: 'English Literature',
      class: '8',
      subject: 'English',
      description: 'Shakespearean Plays Overview',
      dateAdded: '2024-09-15',
      addedBy: 'Mrs. Emily Brown',
    },
  ];

  return (
    <div className=" bg-gray-100 ">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Study Material List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Class</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Date Added</th>
              <th className="py-3 px-6 text-left">Added By</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm font-light">
            {studyMaterials.map((material, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{material.title}</td>
                <td className="py-3 px-6 text-left">{material.class}</td>
                <td className="py-3 px-6 text-left">{material.subject}</td>
                <td className="py-3 px-6 text-left">{material.description}</td>
                <td className="py-3 px-6 text-left">{material.dateAdded}</td>
                <td className="py-3 px-6 text-left">{material.addedBy}</td>
                <td className="py-3 px-6 text-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyMaterialList;
