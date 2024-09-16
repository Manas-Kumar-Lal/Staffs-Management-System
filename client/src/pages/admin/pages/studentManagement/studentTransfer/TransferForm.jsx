import React from 'react';
import { FaUserGraduate, FaGenderless } from 'react-icons/fa';
import INPUT from '../../../components/form/input/INPUT';
import SELECT from '../../../components/form/select/SELECT';

const TransferForm = () => {
    return (
        <div className="w-full h-fit bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>

            <h2 className="text-lg font-bold border-b px-6 py-4 bg-[lightseagreen]">Transfer A Student To An Other Campus</h2>

            <form className='p-6'>

                {/* From Campus with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="From Campus"
                        Icon={FaGenderless}
                        options={['Main Campus', 'Bottom Campus', 'Teasur Campus']}
                        id="fromCampus"
                    />
                </div>

                {/* To Campus with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="To Campus"
                        Icon={FaGenderless}
                        options={['Main Campus', 'Bottom Campus', 'Teasur Campus']}
                        id="toCampus"
                    />
                </div>

                {/* Class with Icon */}
                <div className="mb-8">
                    <SELECT
                        label="Class"
                        Icon={FaGenderless}
                        options={['One', 'Two', 'Three']}
                        id="class"
                    />
                </div>

                {/* Student Code Input with Icon */}
                <div className="mb-4">
                    <INPUT
                        label='Student Code'
                        Icon={FaUserGraduate} // Pass the user icon
                        type="text"
                        id="studentCode"
                        placeholder="Type Student Code / Roll here.."
                    />
                </div>

                {/* Also Move Dues with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Also Move Dues"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="alsoMoveDues"
                    />
                </div>

                {/* Also Move Payments with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Also Move Payments"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="alsoMovePayments"
                    />
                </div>

                {/* Notify Parent with Icon */}
                <div className="mb-4">
                    <SELECT
                        label="Notify Parent"
                        Icon={FaGenderless}
                        options={['No', 'yes']}
                        id="notify Parent"
                    />
                </div>

            </form>
        </div>
    );
};

export default TransferForm;
