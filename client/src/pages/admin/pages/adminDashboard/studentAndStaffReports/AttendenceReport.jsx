// AttendanceChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendenceReport = () => {

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Total Present',
        data: [200, 215, 220, 210, 230, 220], // Sample data for total present
        backgroundColor: '#3b82f6', // Tailwind's blue-500
        barThickness: 15,
      },
      {
        label: 'Total Absent',
        data: [50, 40, 60, 45, 55, 40], // Sample data for total absent
        backgroundColor: '#34d399', // Tailwind's teal-400
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Attendance',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 300, // Set this to the max value needed
      },
    },
  };

  return (
    <div className="w-full min-w-[25rem] rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Attendance</h2>
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded-md p-2">
            <option>This week</option>
            <option>Last week</option>
            <option>This month</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2">
            <option>Class 10</option>
            <option>Class 9</option>
            <option>Class 8</option>
          </select>
        </div>
      </div>
      <div className="relative h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AttendenceReport;
