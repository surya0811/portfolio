import React, { useEffect, useRef } from 'react';
import { CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import { Chart } from 'chart.js';

const ProgressBarGraph = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Register necessary scale and controller
    Chart.register(CategoryScale, LinearScale, BarController, BarElement);

    // Set up data for the progress bar graph
    const languagesData = {
      labels: ['HTML', 'CSS', 'Java', 'JAVA SCRIPT', 'PYTHON', 'DATABASE', 'REACT JS', 'NODE JS','APACHE'],
      datasets: [
        {
          data: [90, 70, 90, 85, 88, 90, 80, 85,70],
          backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 205, 86, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(125, 102, 255, 0.7)', 'rgba(193, 102, 254, 0.7)', 'rgba(153, 162, 185, 0.3)','rgba(75, 192, 192, 0.7)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)', 'rgba(153, 102, 255, 1)', 'rgba(150, 102, 255, 1)', 'rgba(125, 102, 254, 1)', 'rgba(193, 162, 185, 1)','rgba(75, 192, 192, 0.4)'],
          borderWidth: 5,
        },
      ],
    };

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    // Create the progress bar graph
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: languagesData,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            grid: {
              display: false,
            },
            ticks: {
              color: 'white', // Change X-axis label color to 
              font: {
                size: 16, // Increase the size of the X-axis labels
              },
            },
            barPercentage: 0.4, // Decrease the width of the bars
            categoryPercentage: 0.4, // Decrease the space between the bars

          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 10,
              color: 'white',
              font: {
                size:16,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '32px', color: 'white', textAlign: 'center' }}>MY SKILLS</h1>
      <canvas ref={chartRef}/>
    </div>
  );
};

export default ProgressBarGraph;
