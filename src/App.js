import React, { useLayoutEffect, useEffect, useState } from 'react';
import Finplan from './pages/Finplan/Finplan';
import { Route, Routes, useLocation } from 'react-router-dom';
import Incomes from './pages/Incomes/Incomes';
import Credit from './pages/Credit/Credit';
import Accounting from './pages/Accounting/Accounting';
import AccountingIncomes from './pages/AccountingIncomes/AccountingIncomes';
import AccountingCredit from './pages/AccountingCredit/AccountingCredit';
import Finmodel from './pages/Finmodel/Finmodel';
import CreateSolution from './pages/CreateSolution/CreateSolution';
import CreateSolutionAim from './pages/CreateSolutionAim/CreateSolutionAim';
import CreateSolutionPriority from './pages/CreateSolutionPriority/CreateSolutionPriority';
import CreateSolutionHome from './pages/CreateSolutionHome/CreateSolutionHome';
import CreateSolutionCar from './pages/CreateSolutionCar/CreateSolutionCar';
import CreateSolutionFlat from './pages/CreateSolutionFlat/CreateSolutionFlat';
import CreateSolutionIndividual from './pages/CreateSolutionIndividual/CreateSolutionIndividual';
import MyResults from './pages/MyResults/MyResults';
import Study from './pages/Study/Study';
import MyProfile from './pages/MyProfile/MyProfile';
import Studying from './pages/Studying/Studying';
import Possibilities from './pages/Possibilities/Possibilities';
import AnalysisCashFlow from './pages/AnalysisCashFlow/AnalysisCashFlow';
import StructureAnalysis from './pages/StructureAnalysis/StructureAnalysis';
import AnalysisEfficiency from './pages/AnalysisEfficiency/AnalysisEfficiency';
import ActualAnalysis from './pages/ActualAnalysis/ActualAnalysis';
import FinResults from './pages/FinResults/FinResults';
import FinConditions from './pages/FinConditions/FinConditions';
import NoMatterAnalysis from './pages/NoMatterAnalysis/NoMatterAnalysis';
import Refund from './pages/Refund/Refund';
import Borrow from './pages/Borrow/Borrow';
import BasicNeeds from './pages/BasicNeeds/BasicNeeds';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import Fincashout from './pages/Fincashout/Fincashout';
import Attachment from './pages/Attachment/Attachment';
import Debts from './pages/Debts/Debts';
import AccountingBalance from './pages/AccountingBalance/AccountingBalance';
import AccountingCashReturn from './pages/AccountingIncomes/AccountingCashReturn';
import AccountingBorrowings from './pages/AccountingIncomes/AccountingBorrowings';
import AccountingAttachment from './pages/AccountingCredit/AccountingAttachment';
import AccountingDebts from './pages/AccountingCredit/AccountingDebts';
import AccountingBalanceIncomes from './pages/AccountingIncomes/AccountingBalanceIncomes';
import AccountingBasicNeeds from './pages/AccountingCredit/AccountingBasicNeeds';
import AccountingLifestyle from './pages/AccountingCredit/AccountingLifestyle';
import AccountingCachout from './pages/AccountingCredit/AccountingCachout';
import AccountingBalanceDebts from './pages/AccountingCredit/AccountingBalanceDebts';
import SignUp from './pages/Auth/SignUp/SignUp';
import SignIn from './pages/Auth/SignIn/SignIn';
import ForgotPass from './pages/Auth/ForgotPass/ForgotPass';

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  fetch('http://efficlub.ru/api/v1/test')
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
    });

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path='*' element={<MyResults />}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
          <Route path='SignIn' element={<SignIn />}></Route>
          <Route path='ForgotPass' element={<ForgotPass />}></Route>
          <Route path='finplan' element={<Finplan />}></Route>
          <Route path='incomes' element={<Incomes />}></Route>
          <Route path='credit' element={<Credit />}></Route>
          <Route path='FinAnalys' element={<AnalysisCashFlow />}></Route>
          <Route path='FinResults' element={<FinResults />}></Route>
          <Route path='NoMatterAnalysis' element={<NoMatterAnalysis />}></Route>
          <Route path='FinConditions' element={<FinConditions />}></Route>
          <Route
            path='AnalysisEfficiency'
            element={<AnalysisEfficiency />}
          ></Route>
          <Route path='ActualAnalysis' element={<ActualAnalysis />}></Route>
          <Route
            path='StructureAnalysis'
            element={<StructureAnalysis />}
          ></Route>
          <Route path='accounting' element={<Accounting />}></Route>
          <Route
            path='AccountingIncomes'
            element={<AccountingIncomes />}
          ></Route>
          <Route path='AccountingCredit' element={<AccountingCredit />}></Route>
          <Route path='finmodeling' element={<Finmodel />}></Route>
          <Route path='CreateSolution' element={<CreateSolution />}></Route>
          <Route
            path='CreateSolutionAim'
            element={<CreateSolutionAim />}
          ></Route>
          <Route
            path='CreateSolutionPriority'
            element={<CreateSolutionPriority />}
          ></Route>
          <Route
            path='CreateSolutionHome'
            element={<CreateSolutionHome />}
          ></Route>
          <Route
            path='CreateSolutionCar'
            element={<CreateSolutionCar />}
          ></Route>
          <Route
            path='CreateSolutionFlat'
            element={<CreateSolutionFlat />}
          ></Route>
          <Route
            path='CreateSolutionIndividual'
            element={<CreateSolutionIndividual />}
          ></Route>
          <Route path='MyResults' element={<MyResults />}></Route>
          <Route path='Refund' element={<Refund />}></Route>
          <Route path='Borrow' element={<Borrow />}></Route>
          <Route path='BasicNeeds' element={<BasicNeeds />}></Route>
          <Route path='Lifestyle' element={<Lifestyle />}></Route>
          <Route path='Fincashout' element={<Fincashout />}></Route>
          <Route path='Attachment' element={<Attachment />}></Route>
          <Route path='Debts' element={<Debts />}></Route>
          <Route path='Study' element={<Study />}></Route>
          <Route path='Studying' element={<Studying />}></Route>
          <Route path='MyProfile' element={<MyProfile />}></Route>
          <Route path='Possibilities' element={<Possibilities />}></Route>
          <Route path='AccountingDebts' element={<AccountingDebts />}></Route>
          <Route
            path='AccountingBalanceDebts'
            element={<AccountingBalanceDebts />}
          ></Route>
          <Route
            path='AccountingCachout'
            element={<AccountingCachout />}
          ></Route>
          <Route
            path='AccountingLifestyle'
            element={<AccountingLifestyle />}
          ></Route>
          <Route
            path='AccountingBasicNeeds'
            element={<AccountingBasicNeeds />}
          ></Route>
          <Route
            path='AccountingBalanceIncomes'
            element={<AccountingBalanceIncomes />}
          ></Route>
          <Route
            path='AccountingAttachment'
            element={<AccountingAttachment />}
          ></Route>
          <Route
            path='AccountingBorrowings'
            element={<AccountingBorrowings />}
          ></Route>
          <Route
            path='AccountingCashReturn'
            element={<AccountingCashReturn />}
          ></Route>
          <Route
            path='AccountingBalance'
            element={<AccountingBalance />}
          ></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
