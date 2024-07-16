"use client";
import React, { useState, useEffect, useContext } from "react";
import { Card } from "primereact/card";
import Clock from "./components/Clock";
import InputClock from "./components/InputClock";
import { reverseFibonacci } from "./utils/fibonacci";
import ResultModal from "./components/ModalResult";
import { AppContext } from "./context/History";
import { Button } from "primereact/button";
import DataModal from "./components/ModalHistory";

export default function Home() {
  const context = useContext(AppContext);

  const [results, setResults] = useState<number[]>([]);
  const [visible, setVisible] = useState(false);
  const [isHistorial, setIsHistorial] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");

  /**
   * Calculates the Fibonacci sequence based on the given data string.
   *
   * @param {string} data - The data string in the format "HH:MM:SS".
   * @return {void} This function does not return anything.
   */
  function handleCalculateFibonaci(data: string) {
    const parts = data.split(":");
    const minutes = parts[1];
    const seconds = parts[2];
    const partMin = minutes.split("");

    const numberInit1 = Number(partMin[0]);
    const numberInit2 = Number(partMin[1]);
    const count = Number(seconds);

    const fibo = reverseFibonacci(numberInit1, numberInit2, count).reverse();
    setResults(fibo);
    context?.addDataItem({ key: data, values: fibo });
    setVisible(true);
    postData(numberInit1, numberInit2, count);
  }

  const postData = async (arg1: number, arg2: number, arg3: number) => {
    try {
      const response = await fetch(
        "https://proteccionbacktest.onrender.com/fibo/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Aquí puedes agregar otros headers según sea necesario
          },
          body: JSON.stringify({ arg1, arg2, arg3 }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud POST");
      }

      const data = await response.json();
      console.log(data);

      setResponseMessage(data.message); // Actualiza el estado con la respuesta del servicio
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      // Aquí puedes manejar el error de manera adecuada (mostrar un mensaje, etc.)
    }
  };

  return (
    <Card className="" style={{ textAlign: "center", margin: "0 auto" }}>
      <Clock handleOnClick={handleCalculateFibonaci}></Clock>;
      <InputClock handleOnClick={handleCalculateFibonaci}></InputClock>
      <ResultModal
        results={results}
        isVisible={visible}
        handleVisible={setVisible}
      />
      {context && context?.data?.length > 0 && (
        <Button
          label="Historial"
          onClick={() => setIsHistorial(true)}
          className="p-5"
        ></Button>
      )}
      <DataModal
        visible={isHistorial}
        onHide={() => setIsHistorial(false)}
        dataItem={context?.data}
      ></DataModal>
    </Card>
  );
}
