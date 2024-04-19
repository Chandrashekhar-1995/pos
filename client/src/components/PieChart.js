import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import Chart from "react-apexcharts";


const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [60, 34, 6],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00897b", "#ff8f00", "#FF0000"],
    legend: {
      show: false,
    },
  },
};
 
const PieChart=() =>{
  return (
    <div className='border border-black m-2'>
    <h3 className='bg-blue-900 text-white'>DISTRIBUTION IN LAST 30 DAYS</h3>
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
         >
        <div className="flex">
          <Typography variant="small" color="gray" className="mx-2"> 🟩 Sale </Typography>
          <Typography variant="small" color="gray" className="mx-2"> 🟨 Purchase </Typography>
          <Typography variant="small" color="gray" className="mx-2"> 🔴 Expense </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
    </div>
  );
};


export default PieChart;
