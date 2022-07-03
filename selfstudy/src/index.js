import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./com/Cancel/cancel";
import App from "./App"
import Selfchoice from "./com/Self/selfchoice";
import Student from "./com/Student/student";
import Cancelreault from "./com/Cancel/cancelresult";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/selfchoice" element={<Selfchoice/>}/>
      <Route path="/studentinfo" element={<Student/>}/>
      <Route path="/cancelresult" element={<Cancelreault/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);