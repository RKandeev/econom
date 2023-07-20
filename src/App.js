import React from "react";
import Finplan from "./pages/Finplan/Finplan";
import { Route, Routes } from "react-router-dom";
import Incomes from "./pages/Incomes/Incomes";
import Credit from "./pages/Credit/Credit";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Finplan />}></Route>
        <Route path="incomes" element={<Incomes />}></Route>
        <Route path="credit" element={<Credit />}></Route>
      </Routes>
    </>
  );
}

export default App;
