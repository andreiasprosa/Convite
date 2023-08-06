import React from "react";
import ReactDOMClient from "react-dom/client";
import { Intro } from "./screens/Convite/Intro";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Intro />);
