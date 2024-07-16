"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Definición de tipos
export interface DataItem {
  key: string;
  values: number[];
}

export interface ContextType {
  data: DataItem[];
  addDataItem: (item: DataItem) => void;
}

interface Props {
  children: ReactNode;
}

// Crear el contexto
export const AppContext = createContext<ContextType | undefined>(undefined);

// Proveedor del contexto
export const AppContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<DataItem[]>([]);

  // Función para agregar un nuevo item de datos
  const addDataItem = (item: DataItem) => {
    setData([...data, item]);
  };

  return (
    <AppContext.Provider value={{ data, addDataItem }}>
      {children}
    </AppContext.Provider>
  );
};
