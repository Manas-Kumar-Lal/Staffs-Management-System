import React from 'react'

const AddSubjectMarks = () => {
    return (
        <div>
            {/* Add Exam Results Form */}
            <div className="p-5 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add Exam Results</h2>

                {/* Table for Exam Results */}
                <table className="min-w-full mb-5 bg-gray-50 rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Paper Code</th>
                            <th className="py-2 px-4 border-b text-left">Subject Name</th>
                            <th className="py-2 px-4 border-b text-left">Subject Type</th>
                            <th className="py-2 px-4 border-b text-left">Maximum Marks</th>
                            <th className="py-2 px-4 border-b text-left">Obtained Marks</th>
                            <th className="py-2 px-4 border-b text-left">Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Computer</td>
                            <td className="py-2 px-4 border-b">Computer</td>
                            <td className="py-2 px-4 border-b">Theory</td>
                            <td className="py-2 px-4 border-b">100</td>
                            <td className="py-2 px-4 border-b">
                                <input
                                    type="number"
                                    className="w-full px-3 py-1 border rounded"
                                    placeholder="Enter marks"
                                />
                            </td>
                            <td className="py-2 px-4 border-b">
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border rounded"
                                    placeholder="Enter remark"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Teacher Remark */}
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-1" htmlFor="teacherRemark">
                        Teacher Remark
                    </label>
                    <input
                        type="text"
                        id="teacherRemark"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter Remark"
                    />
                </div>

                {/* School Remark */}
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-1" htmlFor="schoolRemark">
                        School Remark
                    </label>
                    <input
                        type="text"
                        id="schoolRemark"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter Remark"
                    />
                </div>

                {/* Upload Answer Key */}
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-1">
                        Upload Answer Key
                    </label>
                    <input type="file" className="w-full text-sm" />
                </div>

                {/* Submit Button */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Results
                </button>
            </div>
        </div>
    )
}

export default AddSubjectMarks
