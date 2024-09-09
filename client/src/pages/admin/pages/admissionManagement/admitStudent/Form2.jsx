import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaUserGraduate } from 'react-icons/fa';
import INPUT from '../components/input/INPUT';

const Form2 = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{boxShadow:'0 0 15px rgba(0,0,0,.1)'}}>
            
            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Parent Information</h2>

            <form className='p-6'>
                {/* Father Name Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label="Father Name"
                        Icon={FaUserGraduate}
                        type="text"
                        id="fatherName"
                        placeholder="Enter Father name"
                    />
                </div>

                {/* Parent Email Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Parent Email'
                        Icon={FiCalendar}
                        type="email"
                        id="parentEmail"
                        placeholder="Enter Email"
                    />
                </div>

                {/* Parent Phone Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Parent Phone'
                        Icon={FaUserGraduate}
                        type="number"
                        id="parentPhone"
                        placeholder="Enter Parent Phone"
                    />
                </div>

                {/* Alternate Number Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Alternate Number'
                        Icon={FaUserGraduate}
                        type="number"
                        id="alternateNumber"
                        placeholder="Enter Alternate Number"
                    />
                </div>

                {/* Religion Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label="Religion"
                        Icon={FaUserGraduate}
                        type="text"
                        id="Religion"
                        placeholder="Religion / Faith of Student"
                    />
                </div>

                {/* Home Address Input with Icon */}
                <div>
                    <INPUT
                        label='Home Address'
                        Icon={FaUserGraduate} // Pass the user icon
                        type="text"
                        id="homeAddress"
                        placeholder="Enter Home Address  "
                    />
                </div>
            </form>
        </div>
    );
};

export default Form2;
