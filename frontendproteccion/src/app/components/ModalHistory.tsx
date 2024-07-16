import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { DataItem } from "../context/History";

interface DataModalProps {
  visible: boolean;
  onHide: () => void;
  dataItem: DataItem[] | null | undefined;
}

const DataModal: React.FC<DataModalProps> = ({ visible, onHide, dataItem }) => {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleShowDetails = (item: DataItem) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  return (
    <Dialog visible={visible} onHide={onHide} header="Detalles de DataItem">
      {dataItem && dataItem.length > 0 ? (
        <>
          <ul>
            {dataItem.map((item, index) => (
              <li key={index}>
                <span>Key: {item.key}</span>
                <Button
                  label={
                    showDetails && selectedItem === item
                      ? "Ocultar Detalles"
                      : "Ver Más"
                  }
                  onClick={() => handleShowDetails(item)}
                />
                {showDetails && selectedItem === item && (
                  <>
                    <h3>Valores:</h3>
                    <ul>
                      {item.values.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                    </ul>
                    {/* Aquí puedes agregar más detalles si es necesario */}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay elementos para mostrar.</p>
      )}
    </Dialog>
  );
};

export default DataModal;
