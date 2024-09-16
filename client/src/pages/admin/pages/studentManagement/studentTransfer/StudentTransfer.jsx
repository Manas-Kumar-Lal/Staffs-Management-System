import React from 'react'
import SELECT from '../../../components/form/select/SELECT'
import { FaGenderless } from 'react-icons/fa';
import PrimaryButton from '../../../../../components/utilities/buttons/primaryButton/PrimaryButton'
import { ImUserPlus } from "react-icons/im";
import TransferForm from './TransferForm'

const StudentTransfer = () => {
    return (
        <div className='max-w-[50rem] w-full m-auto'>

            <TransferForm />

            <div className='w-full mt-6'>
                <PrimaryButton Icon={<ImUserPlus />} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, .5)' }}>
                    Transfer Student
                </PrimaryButton>
            </div>

        </div>
    )
}

export default StudentTransfer