import React from 'react';
import StudyMaterialList from './StudyMaterialList';
import { useNavigate } from 'react-router-dom';

function StudentStudyMaterial() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100  ">
      <div className="w-full  bg-white p-6 rounded-md shadow-lg">
        <h1 className="py-4 w-full bg-[lightseagreen] text-center text-2xl sm:text-3xl font-bold text-white rounded-md shadow-md">
          Study Material
        </h1>
        <div className="mt-6 flex justify-end">
          <button onClick={()=>navigate("/teacher/add-study-material")} className="px-4 py-2 bg-[lightseagreen] text-white rounded-md shadow-md hover:bg-[teal] transition-all duration-300">
            Add New Study Material
          </button>
     </div>
      </div>

<div>
    <StudyMaterialList />
</div>

    </div>
  );
}

export default StudentStudyMaterial;
