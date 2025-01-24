import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Savings FY 2022 vs FY 2023 in Crores',
    },
    height: 50
  },

};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'FY 2022',
      data: labels.map(() => faker.datatype.number({ min: 0.9, max: 4 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'FY 2023',
      data: labels.map(() => faker.datatype.number({ min: 0.2, max: 7 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function NewSection() {
  return (
    <div className="pl-2 rounded-xl bg-white h-44">
      <Line options={options} data={data} />
    </div>
  );
}

export default NewSection;
