import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import StudentCountCard from './Card';

// Register necessary components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const FeesReport = () => {
    // Updated data for financial balance
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Paid (in INR)',
                data: [5000, 6000, 4000, 7000, 8000, 7500, 9000, 6800, 7200, 8000, 8200, 9500],  // Positive values for income
                backgroundColor: 'rgba(32, 178, 170, 0.8)',  // Blue color for income
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Unpaid (in INR)',
                data: [3000, 2500, 4500, 2000, 3500, 4000, 5000, 3700, 3900, 3000, 2800, 3600],  // Negative values for expenses
                backgroundColor: 'rgba(255, 99, 132, 0.8)',  // Pink color for expenses
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Month Wise Paid Unpaid Fee Report For Current Year',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10000,
            },
        },
    };


    const Json = [
        {
            keyHeading: 'Total Students',
            keyValue: '8',
            description: <p>Boys:{7} Girls: {1}</p>,
            color: '#01A65C',
            colorShift: '#038449',
        },
        {
            keyHeading: 'Parents',
            keyValue: '10',
            description: <p>Total Registered Parents</p>,
            color: '#DC4A39',
            colorShift: '#B13C30',
        },
        {
            keyHeading: 'Staff',
            keyValue: '3',
            description: <p>Male:{3} Female: {0}</p>,
            color: '#00B6E3',
            colorShift: '#0189AD',
        },
        {
            keyHeading: 'Present Students Today',
            keyValue: '10',
            description: <p>Attendence Percentage:{0}%</p>,
            color: '#076697',
            colorShift: '#024B78',
        },
    ]

    return (
        <div className='w-full h-full flex max-[1240px]:flex-col justify-between gap-8'>

            <div className='min-[1240px]:w-[65%] flex flex-col justify-between'>
                <h2 className="text-3xl font-bold text-gray-500 mb-7">Financial Overview</h2>
                <div className='overflow-x-auto'>
                    <div className="min-w-[600px] max-w-3xl">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>

            <div className='w-[30%] max-[1240px]:w-full min-[1240px]:pb-10 grid grid-cols-1 max-[1240px]:grid-cols-2 max-[940px]:grid-cols-1 gap-3 flex-shrink-0'>
                {Json?.map((item, index) => {
                    return (
                        <StudentCountCard
                            key={index}
                            details={item}
                        />
                    )
                })}
            </div>

        </div>
    );
};

export default FeesReport;
