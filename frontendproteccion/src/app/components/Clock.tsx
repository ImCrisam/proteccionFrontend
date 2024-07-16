"use client";
import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface props {
  handleOnClick: (data: string) => void;
}
const Clock = ({ handleOnClick }: props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };
  return (
    <Card
      title="Hora Actual"
      className="p-shadow-5"
      style={{ textAlign: "center", margin: "0 auto" }}
    >
      <h2>{time.toLocaleTimeString()}</h2>
      <Button
        label="Calcular"
        onClick={() => handleOnClick(time.toLocaleTimeString())}
      />
    </Card>
  );
};

export default Clock;
