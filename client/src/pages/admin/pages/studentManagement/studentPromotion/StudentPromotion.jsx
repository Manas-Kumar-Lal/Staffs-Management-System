import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaGenderless } from 'react-icons/fa';
import SecondaryButton from '../../../../../components/utilities/buttons/secondaryButton/SecondaryButton'
import SELECT from '../../../components/form/select/SELECT'

const StudentPromotion = () => {
    return (
        <div style={{ boxShadow: '0 0 10px rgba(0,0,0,.2)' }}>
            {/* Header */}
            <div className="bg-[lightseagreen] text-white p-4 rounded-t-md">
                <h2 className="text-lg font-bold">Print Admission Forms</h2>
            </div>

            <div className="p-3 flex items-end justify-between gap-[1rem] max-[1300px]:flex-col max-[1300px]:items-start">

                <div className="w-full flex items-end justify-between gap-[1rem] max-[500px]:flex-col">
                    {/* Campus Select with Icon */}
                    <div className="w-full">
                        <SELECT
                            label="Campus"
                            Icon={FaGenderless}
                            options={['Main Campus', 'Side Campus']}
                            id="campus"
                        />
                    </div>

                    {/* Promotion From Class Select with Icon */}
                    <div className="w-full">
                        <SELECT
                            label="Promotion From Class"
                            Icon={FaGenderless}
                            options={['one', 'two', 'three']}
                            id="promotionFromClass"
                        />
                    </div>
                </div>

                <div className="w-full flex items-end justify-between gap-[1rem] max-[500px]:flex-col">
                    {/* Section Select with Icon */}
                    <div className="w-full">
                        <SELECT
                            label="Section"
                            Icon={FaGenderless}
                            options={['Select Class First', 'A', 'B', 'C']}
                            id="section"
                        />
                    </div>

                    {/* Promotion To Class Select with Icon */}
                    <div className="w-full">
                        <SELECT
                            label="Promotion To Class"
                            Icon={FaGenderless}
                            options={['one', 'two', 'three']}
                            id="promotionToClass"
                        />
                    </div>
                </div>

                {/* Section Select with Icon */}
                <div className="w-full max-w-[12rem]">
                    <SELECT
                        label="Promoted Section"
                        Icon={FaGenderless}
                        options={['Select Class First', 'A', 'B', 'C']}
                        id="section"
                    />
                </div>

                <SecondaryButton Icon={<IoSearch />} className={'bg-[#72C971] h-[3rem] max-w-[10rem]'} iconBG="bg-[#0A8D3F]">
                    Filter Data
                </SecondaryButton>
            </div>
        </div>
    )
}

export default StudentPromotion