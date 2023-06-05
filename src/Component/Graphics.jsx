import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataGraphics } from "../ProductSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataGraphics = () => {
  const products = useSelector((state) => state.products.dataGraphics);
  const [month, setMonth] = useState(" ");
  const [year, setYear] = useState(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataGraphics());
  }, [dispatch]);
  const handleMonths = (e) => {
    setMonth(e.target.value);
  };
  const handleYears = (e) => {
    setYear(e.target.value);
  };

  const dataGraphics = products.filter((value) => {
    if (month === " ") {
      return value;
    } else if (month === value.day.substring(5, 7)) {
      return value;
    }
  });

  let dataX = dataGraphics.map((value) => value.day.substring(8, 10));
  let dataY = dataGraphics.map((value) => value.orderCount);

  const data = {
    labels: dataX,
    datasets: [
      {
        label: "Customer/day",
        data: dataY,
        backgroundColor: "#0D28A6",
        borderColor: "black",
        pointBorderColor: "blue",
      },
    ],
  };

  const option = {
    plugin: {
      responsive: true,
    },

    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };

  return (
    <div>
      {products ? (
        <div>
          <h1 className="text-center my-2">Costumer Count Chart</h1>
          <select className="mx-1 p-1" onChange={handleYears}>
            <option value="2022">2022</option>
          </select>
          <select className="mx-1 p-1" onChange={handleMonths}>
            <option value="09"> September</option>
            <option value="10"> October</option>
            <option value="11"> November</option>
            <option value="12"> December</option>
          </select>
          <div height="500px">
            <Bar data={data} option={option} height="100px"></Bar>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default DataGraphics;
