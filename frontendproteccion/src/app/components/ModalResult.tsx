import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface ResultModalProps {
  results: number[];
  isVisible: boolean;
  handleVisible(is: boolean): void;
}
const ResultModal = ({
  results,
  isVisible,
  handleVisible,
}: ResultModalProps) => {
  const showResults = () => {
    handleVisible(true);
  };

  const hideResults = () => {
    handleVisible(false);
  };

  return (
    <div>
      <Dialog
        visible={isVisible}
        onHide={hideResults}
        header="Resultados"
        modal
        style={{ width: "50vw" }}
        footer={
          <Button
            label="Cerrar"
            icon="pi pi-times"
            className="p-button-text"
            onClick={hideResults}
          />
        }
      >
        <div>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default ResultModal;
