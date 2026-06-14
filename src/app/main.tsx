import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@/core/styles/tokens.css";
import "@/core/styles/globals.css";

// Diem khoi dau cua ung dung: gan cay React vao the #root
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Khong tim thay phan tu #root trong index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);