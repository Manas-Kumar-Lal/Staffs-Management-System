import React from 'react'
import StatsCard from '../../../../components/layouts/statsCard/StatsCard'
import { IoIosPeople } from "react-icons/io";
import { FaFemale, FaMale, FaChartBar } from "react-icons/fa";
import FinanceChart from './FinanceChart';
import FeesReport from './feesReport/FeesReport';
import StudentAndStaffReports from './studentAndStaffReports/StudentAndStaffReports'
import EventCalender from './eventCalender/EventCalender';

const AdminDashboard = () => {

    const data = [
        {
            title: "Dues-Amount : 64750",
            count: 56,
            icon: <IoIosPeople />,
            bgColor: 'from-red-400 to-red-600',
            iconBgColor: 'bg-red-500',
        },
        {
            title: "Total Income This year",
            count: "50,000 Rs",
            icon: <FaFemale />,
            bgColor: 'from-blue-400 to-blue-600',
            iconBgColor: 'bg-blue-500',
        },
        {
            title: "Income This Month",
            count: "5,000",
            icon: <FaMale />,
            bgColor: 'from-green-400 to-green-600',
            iconBgColor: 'bg-green-500',
        },
        {
            title: "Income Today",
            count: "00",
            icon: <FaChartBar />,
            bgColor: 'from-yellow-400 to-yellow-600',
            iconBgColor: 'bg-yellow-500',
        },
        {
            title: "Profit This Month",
            count: "5,000 Rs",
            icon: <FaChartBar />,
            bgColor: 'from-yellow-400 to-yellow-600',
            iconBgColor: 'bg-yellow-500',
        },
        {
            title: "Total Expense This year",
            count: "00",
            icon: <FaMale />,
            bgColor: 'from-green-400 to-green-600',
            iconBgColor: 'bg-green-500',
        },
        {
            title: "Experience This Month",
            count: "00",
            icon: <FaFemale />,
            bgColor: 'from-blue-400 to-blue-600',
            iconBgColor: 'bg-blue-500',
        },
        {
            title: "Experience Today",
            count: "00",
            icon: <IoIosPeople />,
            bgColor: 'from-red-400 to-red-600',
            iconBgColor: 'bg-red-500',
        },
    ];

    return (
        <div>

            <div className='w-full mb-10'>
                <FeesReport />
            </div>

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

            <div className='w-full overflow-x-auto mt-10'>
                <FinanceChart />
            </div>
            <div className='w-full overflow-x-auto mt-10'>
                <StudentAndStaffReports/>
            </div>
            <div className='w-full overflow-x-auto mt-10'>
                <EventCalender/>
            </div>

        </div>
    )
}

export default AdminDashboard
