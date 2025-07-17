import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from '@codesandbox/sandpack-react';

const Sandpack = () => {
  const lineChartCode = `
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Chart as ChartJS } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const LineChart = () => {
  const data = [5, 10, 15, 20, 25];
  
  return (
    <div className="chart-container">
      <Line 
        data={{
          labels: ["A", "B", "C", "D", "E"],
          datasets: [
            {
              label: "Line Chart",
              data,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3
            }
          ]
        }}
      />
    </div>
  );
};
`;

  const barChartCode = `
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement } from "chart.js";
import { Chart as ChartJS } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement);

export const BarChart = () => {
  const data = [12, 19, 3, 5, 2];
  
  return (
    <div className="chart-container">
      <Bar 
        data={{
          labels: ["A", "B", "C", "D", "E"],
          datasets: [
            {
              label: "Bar Chart",
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
              ]
            }
          ]
        }}
      />
    </div>
  );
};
`;

  const pieChartCode = `
import { Pie } from "react-chartjs-2";
import { ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = [12, 19, 3, 5, 2];
  
  return (
    <div className="chart-container">
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
          datasets: [
            {
              label: "Pie Chart",
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
              ],
              borderWidth: 1
            }
          ]
        }}
      />
    </div>
  );
};
`;

  const appCode = `
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">Chart.js Examples</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Line Chart</h2>
        <LineChart />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
        <BarChart />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
        <PieChart />
      </div>
    </div>
  );
}
`;

  return (
    <SandpackProvider
      template="vite-react"
      customSetup={{
        dependencies: {
          react: '^18.2.0',
          'react-dom': '^18.2.0',
          'chart.js': 'latest',
          'react-chartjs-2': 'latest',
        },
        entry: '/App.jsx',
      }}
      files={{
        '/App.jsx': {
          code: appCode,
        },
        '/LineChart.jsx': {
          code: lineChartCode,
        },
        '/BarChart.jsx': {
          code: barChartCode,
        },
        '/PieChart.jsx': {
          code: pieChartCode,
        },
      }}
    >
      <SandpackLayout className="h-screen w-screen">
        <SandpackCodeEditor showLineNumbers showTabs showRunButton wrapContent style={{ height: '100%', width: '100%' }} />
        <SandpackPreview style={{ height: '100%', width: '100%' }} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default Sandpack;
