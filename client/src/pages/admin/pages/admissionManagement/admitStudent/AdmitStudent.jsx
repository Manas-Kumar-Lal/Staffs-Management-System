import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import SELECT from '../components/select/SELECT'
import { FaGenderless } from 'react-icons/fa';
import PrimaryButton from '../../../../../components/utilities/buttons/primaryButton/PrimaryButton'
import { ImUserPlus } from "react-icons/im";

const AdmitStudent = () => {
    return (
        <div>

            <form className='flex gap-[1rem] max-[1000px]:flex-col'>
                <div className="w-full flex flex-col gap-[1rem]">
                    <Form1 />
                    <Form3 />
                </div>
                <div className="w-full flex flex-col gap-[1rem]">
                    <Form2 />
                    <Form4 />
                </div>
            </form>

            {/* Running Session with Icon */}
            <div className='mt-[1rem] flex items-end justify-center gap-[1rem] max-[420px]:flex-col'>
                <div className="w-full">
                    <SELECT
                        label="Running Session"
                        Icon={FaGenderless}
                        options={['2022-2023', '2021-2022', '2020-2021', '2019-2020']}
                        id="running Session"
                    />
                </div>
                <div className='w-full'>
                    <PrimaryButton Icon={ImUserPlus} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, .5)' }}>
                        Admit Student
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default AdmitStudent