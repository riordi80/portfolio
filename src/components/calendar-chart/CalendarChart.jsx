import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

const generateSampleData = () => {
  const data = [];
  let currentDate = new Date("2025-01-01");
  const endDate = new Date("2025-04-07");

  while (currentDate <= endDate) {
    const day = currentDate.toISOString().slice(0, 10);
    const value = Math.floor(Math.random() * 11);
    data.push({ day, value });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const sampleData = generateSampleData();

const CalendarChart = ({
  data = sampleData,
  from = "2025-01-01",
  to = "2025-04-07"
}) => {
  return (
    <ResponsiveCalendar
      data={data}
      from={from}
      to={to}
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      tooltip={(e) => (
        <div style={{ padding: "5px 10px", background: "#fff", border: "1px solid #ccc" }}>
          <strong>{e.day}</strong>: {e.value} events
        </div>
      )}
    />
  );
};

export default CalendarChart;
