import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SensorDashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [], // x-axis labels (timestamps)
    datasets: [
      {
        label: "Temperature (°C)",
        data: [], // y-axis data (temperature values)
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Humidity (%)",
        data: [], // y-axis data (humidity values)
        borderColor: "rgba(153,102,255,1)",
        fill: false,
      },
    ],
  });

  const [motorStatus, setMotorStatus] = useState(false);

  useEffect(() => {
    fetch("https://api.thingspeak.com/channels/12397/feeds.json")
      .then((response) => response.json())
      .then((data) => {
        const feeds = data.feeds;
        const labels = feeds.map((entry) => new Date(entry.created_at).toLocaleString());
        const temperatureData = feeds.map((entry) => entry.field1);
        const humidityData = feeds.map((entry) => entry.field2);

        setSensorData(feeds);
        setChartData({
          labels,
          datasets: [
            {
              label: "Temperature (°C)",
              data: temperatureData,
              borderColor: "rgba(75,192,192,1)",
              fill: false,
            },
            {
              label: "Humidity (%)",
              data: humidityData,
              borderColor: "rgba(153,102,255,1)",
              fill: false,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleMotor = () => {
    setMotorStatus(!motorStatus);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Sensor Data Dashboard
      </h1>

      {/* Line Chart positioned at top right corner with white background */}
      <div className="absolute top-8 right-8 w-190 h-128 bg-white p-4 shadow-lg rounded-lg">
        {sensorData.length > 0 ? (
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        ) : (
          <p className="text-lg text-gray-600 text-center">Loading data...</p>
        )}
      </div>

      {/* Motor Control Section placed below the chart */}
      <div className="absolute top-140 right-8 w-190 bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Motor Control</h2>
        <p className="text-lg text-gray-700 mb-4">
          Use the button below to toggle the motor on or off. The motor can be turned on for processing the data and off to stop the system.
        </p>

        <button
  onClick={toggleMotor}
  className={`px-6 py-3 text-white font-semibold rounded-lg ${
    motorStatus ? "bg-green-500" : "bg-red-500"
  } hover:bg-opacity-80 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-sm shadow-lg`}
>
  {motorStatus ? "Turn Off Motor" : "Turn On Motor"}
</button>

      </div>

      {/* Raw Sensor Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
        {sensorData.length > 0 ? (
          sensorData.map((data, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 space-y-4 hover:shadow-2xl transition-shadow">
              <p className="text-lg font-semibold text-indigo-600">Entry ID: {data.entry_id}</p>
              <p className="text-gray-700">Temperature: {data.field1 || "N/A"} °C</p>
              <p className="text-gray-700">Humidity: {data.field2 || "N/A"} %</p>
              <p className="text-sm text-gray-500">Recorded at: {new Date(data.created_at).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600 text-center">Loading data...</p>
        )}
      </div>

    </div>
  );
};

export default SensorDashboard;
