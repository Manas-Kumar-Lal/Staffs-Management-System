import React from 'react'
import PrimaryButton from "../../../../../../components/utilities/buttons/primaryButton/PrimaryButton";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineLocalPrintshop } from "react-icons/md";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center flex-wrap gap-[1rem] mb-4">

            {/* Export Buttons */}
            <div className="grid grid-cols-5 gap-2 max-[1215px]:grid-cols-3 w-full max-[880px]:grid-cols-2 max-[420px]:grid-cols-1">
                <PrimaryButton Icon={<SiMicrosoftexcel />} className={'bg-green-500'}>
                    Excel
                </PrimaryButton>
                <PrimaryButton Icon={<FaFileCsv />} className={'bg-yellow-500'}>
                    CSV
                </PrimaryButton>
                <PrimaryButton Icon={<FaRegFilePdf />} className={'bg-red-500'}>
                    PDF
                </PrimaryButton>
                <PrimaryButton Icon={<MdOutlineLocalPrintshop />} className={'bg-red-600'}>
                    Print
                </PrimaryButton>
                <PrimaryButton Icon={<MdOutlineLocalPrintshop />} className={'bg-[lightseagreen] whitespace-nowrap'}>
                    Add New Inquiry
                </PrimaryButton>
            </div>

            <div className="w-full flex justify-between">
                {/* Records Dropdown */}
                <select
                    className="border border-gray-300 rounded-md py-3 px-5"
                    defaultValue="20"
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="max-[310px]:w-full border border-gray-300 rounded-md p-2"
                />

            </div>
        </div>
    )
}

export default TopBar