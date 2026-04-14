import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Button } from "@/components/retroui/Button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 15,
        padding: 30,
      }}
    >
      <Button>Default</Button>
      <Button>Hover</Button>
    </div>
  </React.StrictMode>,
);
