import React from "react";
import Chart from "react-apexcharts";

function LineGraph(props) {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
      ],
    },
    stroke: {
      // to indicate possible missing data
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 0],
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 7,
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " rent: ";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " rent: ";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Compare 2021 Rental Prices by City",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "thin",
        fontFamily: undefined,
        color: "#696969",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Chart
        type="line"
        style={{ width: "60%", height: "60%" }}
        series={props.data}
        options={options}
      />
    </div>
  );
}

export default LineGraph;
