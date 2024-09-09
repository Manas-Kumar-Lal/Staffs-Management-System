import React from 'react'
import StatsCard from '../../../../components/layouts/statsCard/StatsCard'
import { IoIosPeople } from "react-icons/io";
import { FaFemale, FaMale, FaChartBar } from "react-icons/fa";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import StudentAdmissionCard from '../../../../components/layouts/studentAdmCard/StudentAdmissionCard.jsx';

const TeacherDashboard = () => {

    const data = [
        {
            title: "Total Students",
            count: 100,
            icon: <IoIosPeople className='text-white w-12 h-12' />,
            bgColor: 'from-red-400 to-red-600',
            iconBgColor: 'bg-red-500',
            textColor: 'text-red-400'
        },
        {
            title: "Girls",
            count: 45,
            icon: <FaFemale className='text-white w-12 h-12' />,
            bgColor: 'from-blue-400 to-blue-600',
            iconBgColor: 'bg-blue-500',
            textColor: 'text-blue-400'
        },
        {
            title: "Boys",
            count: 55,
            icon: <FaMale className='text-white w-12 h-12' />,
            bgColor: 'from-green-400 to-green-600',
            iconBgColor: 'bg-green-500',
            textColor: 'text-green-400'
        },
        {
            title: "Total Present",
            count: 90,
            icon: <MdCheckCircle className='text-white w-12 h-12' />,
            bgColor: 'from-purple-400 to-purple-600',
            iconBgColor: 'bg-purple-500',
            textColor: 'text-purple-400'
        },
        {
            title: "Total Absent",
            count: 10,
            icon: <MdCancel className='text-white w-12 h-12' />,
            bgColor: 'from-gray-400 to-gray-600',
            iconBgColor: 'bg-gray-500',
            textColor: 'text-gray-400'
        },
        {
            title: "Attendance",
            count: "90%",
            icon: <FaChartBar className='text-white w-12 h-12' />,
            bgColor: 'from-yellow-400 to-yellow-600',
            iconBgColor: 'bg-yellow-500',
            textColor: 'text-yellow-400'
        },
    ];

    const latestAdmissions = [
        { name: "John Doe", date: "01 Aug 2024", imgSrc: "https://cdn-icons-png.flaticon.com/512/7084/7084446.png" },
        { name: "Jane Smith", date: "15 Jul 2024", imgSrc: "https://cdn-icons-png.flaticon.com/512/7084/7084446.png" },
        { name: "Michael Brown", date: "22 Jun 2024", imgSrc: "https://cdn-icons-png.flaticon.com/512/7084/7084446.png" },
        { name: "Jane Smith", date: "15 Jul 2024", imgSrc: "https://cdn-icons-png.flaticon.com/512/7084/7084446.png" },
        { name: "Michael Brown", date: "22 Jun 2024", imgSrc: "https://cdn-icons-png.flaticon.com/512/7084/7084446.png" },
    ];

    return (
        <div>
            <div className='grid max-[1000px]:grid-cols-1 max-[1300px]:grid-cols-2 grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {data.map((item, index) => (
                    <StatsCard
                        key={index}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                        bgColor={item.bgColor}
                        iconBgColor={item.iconBgColor}
                    />
                ))}
            </div>

            <div className="mt-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Latest Admissions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestAdmissions.map((item, index) => (
                        <StudentAdmissionCard
                            key={index}
                            name={item.name}
                            date={item.date}
                            imgSrc={item.imgSrc}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default TeacherDashboard;
