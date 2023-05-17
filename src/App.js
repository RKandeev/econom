import React from "react";
import Finplan from "./pages/Finplan/Finplan";
import { Route, Routes } from "react-router-dom";
import Incomes from "./pages/Incomes/Incomes";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Finplan />}></Route>
        <Route path="incomes" element={<Incomes />}></Route>
      </Routes>
    </>
  );
}

export default App;
