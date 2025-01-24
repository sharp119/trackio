import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Traffic Voilation', 'Road Collision', 'Range Issue', 'Others'],
  datasets: [
    {
      label: 'Incidents',
      data: [19, 9, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],

};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  width: 100,
  height: 100,
};

function Stats() {
  return (
    <div className="rounded-xl p-2 bg-white h-44">
      <Doughnut data={data} options={doughnutOptions} />
    </div>
  );
}

export default Stats;
