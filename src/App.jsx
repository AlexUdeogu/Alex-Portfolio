import { useState } from "react";
import HomePage from "./Pages/homePage/homepage";
import {Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  );
}

export default App
