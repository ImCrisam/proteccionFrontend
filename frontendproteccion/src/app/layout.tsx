"use client";

import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import { createContext, useState } from "react";
import { AppContextProvider } from "./context/History";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <style>
        {`
            body, html {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #f0f0f0;
            }
          `}
      </style>
      <body className={inter.className}>
        <PrimeReactProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
