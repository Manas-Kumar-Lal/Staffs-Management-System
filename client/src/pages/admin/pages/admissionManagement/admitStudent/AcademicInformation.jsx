import React from 'react';
import { FaUserGraduate, FaGenderless } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import INPUT from '../../../components/form/input/INPUT';
import SELECT from '../../../components/form/select/SELECT';

const AcademicInformation = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>

            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Academic Information</h2>

            <form className='p-6'>
                {/* Student Code Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Student Code'
                        Icon={FaUserGraduate}
                        type="number"
                        id="studentCode"
                        placeholder="Enter Student Code"
                    />
                </div>

                {/* Campus with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Campus"
                        Icon={FaGenderless}
                        options={['Main Campus', 'Primary Campus', 'Secondary Campus']}
                        id="campus"
                    />
                </div>

                {/* Class Select with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Class"
                        Icon={FaGenderless}
                        options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                        id="class"
                    />
                </div>

                {/* Section with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Section"
                        Icon={FaGenderless}
                        options={['a', 'b', 'c', 'd', 'e']}
                        id="section"
                    />
                </div>

                {/* Previous School Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Previous School'
                        Icon={FaUserGraduate}
                        type="text"
                        id="previousSchool"
                        placeholder="Name of Previous School"
                    />
                </div>

                {/* Admission Date Input with Icon */}
                <div>
                    <INPUT
                        label='Admission Date'
                        Icon={FiCalendar}
                        type="date"
                        id="admissionDate"
                    />
                </div>

            </form>
        </div>
    );
};

export default AcademicInformation;
