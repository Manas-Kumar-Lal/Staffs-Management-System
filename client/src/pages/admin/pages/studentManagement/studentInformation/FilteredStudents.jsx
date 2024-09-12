// src/AdmissionRequests.js
import React from "react";
import TopBar from "./TopBar";
import { FaRegFilePdf } from "react-icons/fa";
import SecondaryButton from "../../../../../components/utilities/buttons/secondaryButton/SecondaryButton";

const FilteredStudents = () => {
    return (
        <div>
            {/* Header */}
            <div className="bg-[lightseagreen] text-white p-4 rounded-t-md">
                <h2 className="text-lg font-bold">Total Results : 2</h2>
            </div>

            {/* Table Actions */}
            <div className="bg-white p-4 shadow-md rounded-b-md">
                {/* Top Bar */}
                <TopBar />

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-[65rem] w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 p-2 align-top">Roll ID</th>
                                <th className="border border-gray-200 p-2 align-top">Photo</th>
                                <th className="border border-gray-200 p-2 align-top">Name</th>
                                <th className="border border-gray-200 p-2 align-top">Parent</th>
                                <th className="border border-gray-200 p-2 align-top">Class</th>
                                <th className="border border-gray-200 p-2 align-top">Section</th>
                                <th className="border border-gray-200 p-2 align-top">Campus</th>
                                <th className="border border-gray-200 p-2 align-top">Phone No.</th>
                                <th className="border border-gray-200 p-2 align-top">ID Card</th>
                                <th className="border border-gray-200 p-2 align-top">Reset Password</th>
                                <th className="border border-gray-200 p-2 align-top">Profile</th>
                                <th className="border border-gray-200 p-2 align-top">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* records */}
                            <tr>
                                <td className="border border-gray-200 p-2 align-top text-center">ST820M</td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <div className="w-[2rem] h-[2rem] bg-blue-500 rounded-full flex items-center justify-center text-white"><FaRegFilePdf /></div>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">Manas Kumar</td>
                                <td className="border border-gray-200 p-2 align-top text-center">Aj X 220</td>
                                <td className="border border-gray-200 p-2 align-top text-center">One</td>
                                <td className="border border-gray-200 p-2 align-top text-center">A</td>
                                <td className="border border-gray-200 p-2 align-top text-center">Main Campus</td>
                                <td className="border border-gray-200 p-2 align-top text-center">7261876702</td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <SecondaryButton className={'bg-[#EF9E17]'} iconBG="bg-[#F6D719]">
                                        Generate ID
                                    </SecondaryButton>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <SecondaryButton className={'bg-[#72C971]'} iconBG="bg-[#0A8D3F]">
                                        Reset Password
                                    </SecondaryButton>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <SecondaryButton>
                                        View Profile
                                    </SecondaryButton>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <SecondaryButton className={'bg-gray-500'} iconBG="bg-gray-600">
                                        Action
                                    </SecondaryButton>
                                </td>
                            </tr>
                            {/* if No records */}
                            <tr>
                                <td className="border border-gray-200 p-2 text-center" colSpan="11">
                                    No records found.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end mt-4">
                    <button className="border border-gray-300 px-4 py-2 rounded-l-md">
                        &lt;
                    </button>
                    <button className="border border-gray-300 px-4 py-2 rounded-r-md">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilteredStudents;
