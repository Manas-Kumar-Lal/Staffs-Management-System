import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FinanceChart = () => {
  // Updated data for financial balance
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Income (in INR)',
        data: [5000, 6000, 4000, 7000, 8000, 7500, 9000, 6800, 7200, 8000, 8200, 9500],  // Positive values for income
        backgroundColor: 'rgba(54, 162, 235, 0.4)',  // Blue color for income
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses (in INR)',
        data: [-3000, -2500, -4500, -2000, -3500, -4000, -5000, -3700, -3900, -3000, -2800, -3600],  // Negative values for expenses
        backgroundColor: 'rgba(255, 0, 0, 0.4)',  // Pink color for expenses
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
        text: 'Monthly Financial Balance (Income vs. Expenses)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: -6000,  // Adjust y-axis to accommodate both negative and positive values
        max: 10000,
      },
    },
  };

  return (
    <div className="w-full min-w-[600px] max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-500">Financial Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinanceChart;
