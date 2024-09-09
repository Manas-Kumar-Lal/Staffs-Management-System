import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaUserGraduate, FaGenderless } from 'react-icons/fa';
import INPUT from '../components/input/INPUT';
import SELECT from '../components/select/SELECT';
import UploadPhoto from '../components/uploadPhoto/UploadPhoto'

const Form1 = () => {
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

                {/* Gender Select with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Gender"
                        Icon={FaGenderless}
                        options={['Select', 'Male', 'Female', 'Other']}
                        id="gender"
                    />
                </div>

                {/* Date of Birth Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Date Of Birth'
                        Icon={FiCalendar} // Pass the calendar icon
                        type="date"
                        id="dob"
                    />
                </div>

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

export default Form1;
