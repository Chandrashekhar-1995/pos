import {Card, CardBody } from "@material-tailwind/react";
  import Chart from "react-apexcharts";

  const chartConfig = {
    type: "bar",
    height: 310,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500, 160, 460, 380, 200, 10, 400],
      },
    ],
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
      colors: ["#00bcd4"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
         "15 Mar",
         "16 Mar",
         "17 Mar",
         "18 Mar",
         "19 Mar",
         "20 Mar",
         "21 Mar",
         "22 Mar",
         "23 Mar",
         "24 Mar",
         "25 Mar",
         "26 Mar",
         "27 Mar",
         "28 Mar",
         "29 Mar",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  const BarChart = () => {
    return (
      <Card className="shadow-lg">
        <CardBody>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  };

  export default BarChart;
  