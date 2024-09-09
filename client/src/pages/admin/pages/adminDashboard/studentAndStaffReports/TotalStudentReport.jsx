// GenderDoughnutChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalStudentReport = () => {

    const data = {
        labels: ['Girls', 'Boys', 'Others'],
        datasets: [
            {
                data: [45, 35, 20], // Adjust these values to represent the data you have
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for Girls, Boys, Others
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };

    return (
        <div className="w-full min-w-[20rem]">
            <h2 className="text-xl font-bold mb-4">Total Students By Gender:</h2>
            <div className="relative h-80">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalStudentReport;
