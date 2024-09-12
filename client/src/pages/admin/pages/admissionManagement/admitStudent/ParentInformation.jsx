import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaUserGraduate } from 'react-icons/fa';
import INPUT from '../../../components/form/input/INPUT';
import TEXTAREA from '../../../components/form/textarea/TEXTAREA';
import TwoColWrapper from './components/TwoColWrapper';

const ParentInformation = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>

            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Parent Information</h2>

            <form className='p-6'>

                <TwoColWrapper>
                    {/* Father Name Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Father's Name"
                            Icon={FaUserGraduate}
                            type="text"
                            id="fatherName"
                            placeholder="Enter Father name"
                        />
                    </div>

                    {/* Mother's Name Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Mother's Name"
                            Icon={FaUserGraduate}
                            type="text"
                            id="motherName"
                            placeholder="Enter Mother name"
                        />
                    </div>
                </TwoColWrapper>

                <TwoColWrapper>
                    {/* Father's Occupation Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Father's Occupation"
                            Icon={FaUserGraduate}
                            type="text"
                            id="fatherOccupation"
                            placeholder="Enter Father Occupation"
                        />
                    </div>

                    {/* Mother's Occupation Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Mother's Occupation"
                            Icon={FaUserGraduate}
                            type="text"
                            id="motherOccupation"
                            placeholder="Enter Mother Occupation"
                        />
                    </div>
                </TwoColWrapper>

                {/* Email Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Email'
                        Icon={FiCalendar}
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                    />
                </div>

                <TwoColWrapper>
                    {/* Phone No. Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label='Phone No.'
                            Icon={FaUserGraduate}
                            type="number"
                            id="phoneNumber"
                            placeholder="Enter Phone Number"
                        />
                    </div>

                    {/* Alternate Phone Number Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label='Alternate Phone No.'
                            Icon={FaUserGraduate}
                            type="number"
                            id="alternatePhoneNumber"
                            placeholder="Enter Alternate Phone Number"
                        />
                    </div>
                </TwoColWrapper>

                <TwoColWrapper>
                    {/* Religion Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Religion"
                            Icon={FaUserGraduate}
                            type="text"
                            id="Religion"
                            placeholder="Religion / Faith of Student"
                        />
                    </div>

                    {/* Nationality Input with Icon */}
                    <div className="mb-4 w-full">
                        <INPUT
                            label="Nationality"
                            Icon={FaUserGraduate}
                            type="text"
                            id="nationality"
                            placeholder="E.g., India"
                        />
                    </div>
                </TwoColWrapper>

                {/* Residential Address Input with Icon */}
                <div className="mb-4">
                    <TEXTAREA
                        label='Residential Address'
                        id="residentialAddress"
                        placeholder="Enter Residential Address  "
                    />
                </div>

                {/* Office Address Input with Icon */}
                <div>
                    <TEXTAREA
                        label='Office Address'
                        id="officeAddress"
                        placeholder="Enter Office Address  "
                    />
                </div>
            </form>
        </div>
    );
};

export default ParentInformation;
