import React from "react";
import Finplan from "./pages/Finplan/Finplan";
import { Route, Routes } from "react-router-dom";
import Incomes from "./pages/Incomes/Incomes";
import Credit from "./pages/Credit/Credit";
import Accounting from "./pages/Accounting/Accounting";
import AccountingIncomes from "./pages/AccountingIncomes/AccountingIncomes";
import AccountingCredit from "./pages/AccountingCredit/AccountingCredit";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Finplan />}></Route>
        <Route path="finplan" element={<Finplan />}></Route>
        <Route path="incomes" element={<Incomes />}></Route>
        <Route path="credit" element={<Credit />}></Route>
        <Route path="accounting" element={<Accounting />}></Route>
        <Route path="AccountingIncomes" element={<AccountingIncomes />}></Route>
        <Route path="AccountingCredit" element={<AccountingCredit />}></Route>
      </Routes>
    </>
  );
}

export default App;
