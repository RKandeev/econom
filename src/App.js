import React from "react";
import Finplan from "./pages/Finplan/Finplan";
import { Route, Routes } from "react-router-dom";
import Incomes from "./pages/Incomes/Incomes";
import Credit from "./pages/Credit/Credit";
import Accounting from "./pages/Accounting/Accounting";
import AccountingIncomes from "./pages/AccountingIncomes/AccountingIncomes";
import AccountingCredit from "./pages/AccountingCredit/AccountingCredit";
import Finmodel from "./pages/Finmodel/Finmodel";
import CreateSolution from "./pages/CreateSolution/CreateSolution";
import CreateSolutionAim from "./pages/CreateSolutionAim/CreateSolutionAim";
import CreateSolutionPriority from "./pages/CreateSolutionPriority/CreateSolutionPriority";
import CreateSolutionHome from "./pages/CreateSolutionHome/CreateSolutionHome";
import CreateSolutionCar from "./pages/CreateSolutionCar/CreateSolutionCar";
import CreateSolutionFlat from "./pages/CreateSolutionFlat/CreateSolutionFlat";
import CreateSolutionIndividual from "./pages/CreateSolutionIndividual/CreateSolutionIndividual";
import MyResults from "./pages/MyResults/MyResults";
import Study from "./pages/Study/Study";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<MyResults />}></Route>
        <Route path="finplan" element={<Finplan />}></Route>
        <Route path="incomes" element={<Incomes />}></Route>
        <Route path="credit" element={<Credit />}></Route>
        <Route path="accounting" element={<Accounting />}></Route>
        <Route path="AccountingIncomes" element={<AccountingIncomes />}></Route>
        <Route path="AccountingCredit" element={<AccountingCredit />}></Route>
        <Route path="finmodeling" element={<Finmodel />}></Route>
        <Route path="CreateSolution" element={<CreateSolution />}></Route>
        <Route path="CreateSolutionAim" element={<CreateSolutionAim />}></Route>
        <Route
          path="CreateSolutionPriority"
          element={<CreateSolutionPriority />}
        ></Route>
        <Route
          path="CreateSolutionHome"
          element={<CreateSolutionHome />}
        ></Route>
        <Route path="CreateSolutionCar" element={<CreateSolutionCar />}></Route>
        <Route
          path="CreateSolutionFlat"
          element={<CreateSolutionFlat />}
        ></Route>
        <Route
          path="CreateSolutionIndividual"
          element={<CreateSolutionIndividual />}
        ></Route>
        <Route path="MyResults" element={<MyResults />}></Route>
        <Route path="Study" element={<Study />}></Route>
      </Routes>
    </>
  );
}

export default App;
