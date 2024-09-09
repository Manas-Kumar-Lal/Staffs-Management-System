import React from 'react';
import { FaUserGraduate, FaGenderless } from 'react-icons/fa';
import INPUT from '../components/input/INPUT';
import SELECT from '../components/select/SELECT';

const Form3 = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>

            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Other Information</h2>

            <form className='p-6'>
                {/* Monthly Fee Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Monthly Fee'
                        Icon={FaUserGraduate} // Pass the user icon
                        type="text"
                        id="monethelyFee"
                        placeholder="Enter Monthely Fee"
                    />
                </div>

                {/* Discounted Student with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Discounted Student"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="discountedStudent"
                    />
                </div>

                {/* Transport Route Select with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Transport Route"
                        Icon={FaGenderless}
                        options={['Aliganj', 'Bhagalpur', 'Nathnagar']}
                        id="transportRoute"
                    />
                </div>

                {/* Welcome SMS Alert with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Welcome SMS Alert"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="welcomeSmsAlert"
                    />
                </div>

                {/* Create Parent Account with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Create Parent Account"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="createParentAccount"
                    />
                </div>

                {/*Generate Admission Fee with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Generate Admission Fee"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="generateAdmissionFee"
                    />
                </div>

            </form>
        </div>
    );
};

export default Form3;
