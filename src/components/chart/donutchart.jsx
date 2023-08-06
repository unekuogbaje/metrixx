import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js';

const DonutChart = ({ data }) => {
  useEffect(() => {
    // Create a reference to the canvas element
    const canvas = document.getElementById('donutChart');

    // Create the donut chart using Chart.js
    new ChartJS(canvas, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [data]);

  return <canvas id="donutChart" />;
};

export default DonutChart;
