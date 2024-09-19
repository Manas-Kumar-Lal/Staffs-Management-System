
import React, { useState } from 'react';

const Notification = () => {
    const [formData, setFormData] = useState({
        class: '',
        section: '',
        students: '',
        message: '',
        sendEmailNotification: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, send data to API or perform other actions
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Send Notification</h2>
                <form onSubmit={handleSubmit}>
                    {/* Class Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select Class</option>
                            <option value="10">Class 10</option>
                            <option value="9">Class 9</option>
                            <option value="8">Class 8</option>
                        </select>
                    </div>

                    {/* Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
                        <input
                            type="text"
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            placeholder="Enter section"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Students */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
                        <input
                            type="text"
                            name="students"
                            value={formData.students}
                            onChange={handleChange}
                            placeholder="Enter students (comma-separated or all)"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Static Variables Showcase */}
                    <div className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                            You can use the following variables in the message:
                        </p>
                        <ul className="text-sm text-gray-600 list-disc list-inside">
                            <li>Student Name: [STUDENT_NAME]</li>
                            <li>Class: [CLASS]</li>
                            <li>Section: [SECTION]</li>
                            <li>Roll Number: [ROLL_NUMBER]</li>
                            <li>Enrollment Number: [ENROLLMENT_NUMBER]</li>
                            <li>Admission Number: [ADMISSION_NUMBER]</li>
                            <li>Login Username: [LOGIN_USERNAME]</li>
                            <li>Login Email: [LOGIN_EMAIL]</li>
                            <li>School Name: [SCHOOL_NAME]</li>
                        </ul>
                    </div>


                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[lightseagreen] text-white rounded-md shadow-md hover:bg-[teal] transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Notification Options:</p>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            name="sendEmailNotification"
                            checked={formData.sendEmailNotification}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-700">
                            Send Email Notification
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="sendSmsNotification"
                            checked={formData.sendSmsNotification}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-700">
                            Send SMS Notification
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Notification;
