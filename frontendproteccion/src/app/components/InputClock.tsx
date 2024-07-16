"use client";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

interface props {
  handleOnClick: (data: string) => void;
}
const InputClock = ({ handleOnClick }: props) => {
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (e: any) => {
    setTime(e.value);
  };

  return (
    <Card
      title="Ingrese la Hora"
      className="p-shadow-5"
      style={{ textAlign: "center", margin: "0 auto" }}
    >
      <Calendar
        value={time}
        onChange={handleTimeChange}
        showTime
        showSeconds
        timeOnly
        hourFormat="24"
      />
      <h2>{time.toLocaleTimeString()}</h2>
      <Button
        label="Calcular"
        onClick={() => handleOnClick(time.toLocaleTimeString())}
      />
    </Card>
  );
};

export default InputClock;
