// src/AdmissionRequests.js
import React from "react";
import TopBar from "./TopBar";
import ActionButton from "./ActionButton";

const ManageInquiries = () => {
    return (
        <div>
            {/* Header */}
            <div className="bg-[lightseagreen] text-white p-4 rounded-t-md">
                <h2 className="text-lg font-bold">Admission Requests</h2>
            </div>

            {/* Table Actions */}
            <div className="bg-white p-4 shadow-md rounded-b-md">

                {/* Top Bar */}
                <TopBar />

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-[63rem] w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 p-2 align-top">ID</th>
                                <th className="border border-gray-200 p-2 align-top">Name</th>
                                <th className="border border-gray-200 p-2 align-top">Parent</th>
                                <th className="border border-gray-200 p-2 align-top">Birthday</th>
                                <th className="border border-gray-200 p-2 align-top">Gender</th>
                                <th className="border border-gray-200 p-2 align-top">Phone</th>
                                <th className="border border-gray-200 p-2 align-top">Adress</th>
                                <th className="border border-gray-200 p-2 align-top">Date Added</th>
                                <th className="border border-gray-200 p-2 align-top">Admit</th>
                                <th className="border border-gray-200 p-2 align-top">Send SMS</th>
                                <th className="border border-gray-200 p-2 align-top">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* records */}
                            <tr>
                                <td className="border border-gray-200 p-2 align-top text-center">1</td>
                                <td className="border border-gray-200 p-2 align-top text-center">Manas Kumar Lal</td>
                                <td className="border border-gray-200 p-2 align-top text-center">AX Kumar</td>
                                <td className="border border-gray-200 p-2 align-top text-center">03-01-2015</td>
                                <td className="border border-gray-200 p-2 align-top text-center">Female</td>
                                <td className="border border-gray-200 p-2 align-top text-center">1234567890</td>
                                <td className="border border-gray-200 p-2 align-top text-center">alpha alpha 205 gali nathnagar</td>
                                <td className="border border-gray-200 p-2 align-top text-center">01-01-9239 07:23:23</td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <ActionButton className={'bg-yellow-500'} iconBG="bg-yellow-600">
                                        Admit
                                    </ActionButton>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <ActionButton className={'bg-green-500'} iconBG="bg-green-600">
                                        Send SMS
                                    </ActionButton>
                                </td>
                                <td className="border border-gray-200 p-2 align-top text-center">
                                    <ActionButton className={'bg-gray-500'} iconBG="bg-gray-600">
                                        Action
                                    </ActionButton>
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

export default ManageInquiries;
