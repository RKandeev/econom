import React, { useLayoutEffect, useEffect, useState } from 'react';
import {Toaster} from 'react-hot-toast';
import Finplan from './pages/Finplan/Finplan';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  };
  useEffect (() => {
    const token = localStorage.getItem('token');

    if (!token){
      navigate('/SignUp');
    }
  },[]);

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
            path="AnalysisEfficiency"
          ></Route>
          <Route path='ActualAnalysis' element={<ActualAnalysis />}></Route>
          <Route
            path='StructureAnalysis'
            element={<StructureAnalysis />}
            path="StructureAnalysis"
          ></Route>
          <Route path='accounting' element={<Accounting />}></Route>
          <Route
            path='AccountingIncomes'
            element={<AccountingIncomes />}
            path="AccountingIncomes"
          ></Route>
          <Route path='AccountingCredit' element={<AccountingCredit />}></Route>
          <Route path='finmodeling' element={<Finmodel />}></Route>
          <Route path='CreateSolution' element={<CreateSolution />}></Route>
          <Route
            path='CreateSolutionAim'
            element={<CreateSolutionAim />}
            path="CreateSolutionAim"
          ></Route>
          <Route
            path='CreateSolutionPriority'
            element={<CreateSolutionPriority />}
            path="CreateSolutionPriority"
          ></Route>
          <Route
            path='CreateSolutionHome'
            element={<CreateSolutionHome />}
            path="CreateSolutionHome"
          ></Route>
          <Route
            path='CreateSolutionCar'
            element={<CreateSolutionCar />}
            path="CreateSolutionCar"
          ></Route>
          <Route
            path='CreateSolutionFlat'
            element={<CreateSolutionFlat />}
            path="CreateSolutionFlat"
          ></Route>
          <Route
            path='CreateSolutionIndividual'
            element={<CreateSolutionIndividual />}
            path="CreateSolutionIndividual"
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
            path="AccountingBalanceDebts"
          ></Route>
          <Route
            path='AccountingCachout'
            element={<AccountingCachout />}
            path="AccountingCachout"
          ></Route>
          <Route
            path='AccountingLifestyle'
            element={<AccountingLifestyle />}
            path="AccountingLifestyle"
          ></Route>
          <Route
            path='AccountingBasicNeeds'
            element={<AccountingBasicNeeds />}
            path="AccountingBasicNeeds"
          ></Route>
          <Route
            path='AccountingBalanceIncomes'
            element={<AccountingBalanceIncomes />}
            path="AccountingBalanceIncomes"
          ></Route>
          <Route
            path='AccountingAttachment'
            element={<AccountingAttachment />}
            path="AccountingAttachment"
          ></Route>
          <Route
            path='AccountingBorrowings'
            element={<AccountingBorrowings />}
            path="AccountingBorrowings"
          ></Route>
          <Route
            path='AccountingCashReturn'
            element={<AccountingCashReturn />}
            path="AccountingCashReturn"
          ></Route>
          <Route
            path='AccountingBalance'
            element={<AccountingBalance />}
            path="AccountingBalance"
          ></Route>
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: '14px',
            },
          }}
        />
      </Wrapper>
    </>
  );
}

export default App;
