import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaUserGraduate, FaGenderless } from 'react-icons/fa';
import INPUT from '../../../components/form/input/INPUT';
import SELECT from '../../../components/form/select/SELECT';
import UploadPhoto from '../../../components/form/uploadPhoto/UploadPhoto'
import TwoColWrapper from './components/TwoColWrapper';

const StudentInformation = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>

            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Student Information</h2>

            <form className='p-6'>

                {/* Name Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Name'
                        Icon={FaUserGraduate} // Pass the user icon
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                    />
                </div>

                <TwoColWrapper>
                    {/* Gender Select with Icon */}
                    <div className="mb-4 w-full">
                        <SELECT
                            label="Gender"
                            Icon={FaGenderless}
                            options={['Select', 'Male', 'Female', 'Other']}
                            id="gender"
                        />
                    </div>

                    {/* Date of Birth Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label='Date Of Birth'
                            Icon={FiCalendar} // Pass the calendar icon
                            type="date"
                            id="dob"
                        />
                    </div>
                </TwoColWrapper>

                {/* Photo Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="photo">
                        Photo
                    </label>
                    <UploadPhoto />
                </div>
            </form>
        </div>
    );
};

export default StudentInformation;
