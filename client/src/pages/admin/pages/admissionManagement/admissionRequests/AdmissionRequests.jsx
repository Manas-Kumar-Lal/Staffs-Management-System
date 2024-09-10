// src/AdmissionRequests.js
import React from "react";
import TopBar from "./TopBar";

const AdmissionRequests = () => {
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
                    <table className="min-w-[60rem] w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 p-2 align-top">#</th>
                                <th className="border border-gray-200 p-2 align-top">Student</th>
                                <th className="border border-gray-200 p-2 align-top">Parent</th>
                                <th className="border border-gray-200 p-2 align-top">Request For Class</th>
                                <th className="border border-gray-200 p-2 align-top">Date Of Birth</th>
                                <th className="border border-gray-200 p-2 align-top">Gender</th>
                                <th className="border border-gray-200 p-2 align-top">Email</th>
                                <th className="border border-gray-200 p-2 align-top">Phone</th>
                                <th className="border border-gray-200 p-2 align-top">Request Status</th>
                                <th className="border border-gray-200 p-2 align-top">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* No records row */}
                            <tr>
                                <td className="border border-gray-200 p-2 text-center" colSpan="10">
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

export default AdmissionRequests;
