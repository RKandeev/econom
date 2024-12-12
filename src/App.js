import React, { useEffect, useLayoutEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { apiRequest } from './api';
import { Context } from './Context';
import Accounting from './pages/Accounting/Accounting';
import AccountingBalance from './pages/AccountingBalance/AccountingBalance';
import AccountingAttachment from './pages/AccountingCredit/AccountingAttachment';
import AccountingBalanceDebts from './pages/AccountingCredit/AccountingBalanceDebts';
import AccountingBasicNeeds from './pages/AccountingCredit/AccountingBasicNeeds';
import AccountingCachout from './pages/AccountingCredit/AccountingCachout';
import AccountingCredit from './pages/AccountingCredit/AccountingCredit';
import AccountingDebts from './pages/AccountingCredit/AccountingDebts';
import AccountingLifestyle from './pages/AccountingCredit/AccountingLifestyle';
import AccountingBalanceIncomes from './pages/AccountingIncomes/AccountingBalanceIncomes';
import AccountingBorrowings from './pages/AccountingIncomes/AccountingBorrowings';
import AccountingCashReturn from './pages/AccountingIncomes/AccountingCashReturn';
import AccountingIncomes from './pages/AccountingIncomes/AccountingIncomes';
import ActualAnalysis from './pages/ActualAnalysis/ActualAnalysis';
import AnalysisCashFlow from './pages/AnalysisCashFlow/AnalysisCashFlow';
import AnalysisEfficiency from './pages/AnalysisEfficiency/AnalysisEfficiency';
import Attachment from './pages/Attachment/Attachment';
import ForgotPass from './pages/Auth/ForgotPass/ForgotPass';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import BasicNeeds from './pages/BasicNeeds/BasicNeeds';
import Borrow from './pages/Borrow/Borrow';
import CreateSolution from './pages/CreateSolution/CreateSolution';
import CreateSolutionAim from './pages/CreateSolutionAim/CreateSolutionAim';
import CreateSolutionCar from './pages/CreateSolutionCar/CreateSolutionCar';
import CreateSolutionFlat from './pages/CreateSolutionFlat/CreateSolutionFlat';
import CreateSolutionHome from './pages/CreateSolutionHome/CreateSolutionHome';
import CreateSolutionIndividual from './pages/CreateSolutionIndividual/CreateSolutionIndividual';
import CreateSolutionPriority from './pages/CreateSolutionPriority/CreateSolutionPriority';
import Credit from './pages/Credit/Credit';
import Debts from './pages/Debts/Debts';
import Fincashout from './pages/Fincashout/Fincashout';
import FinConditions from './pages/FinConditions/FinConditions';
import Finmodel from './pages/Finmodel/Finmodel';
import Finplan from './pages/Finplan/Finplan';
import FinResults from './pages/FinResults/FinResults';
import Incomes from './pages/Incomes/Incomes';
import Lifestyle from './pages/Lifestyle/Lifestyle';
import MyProfile from './pages/MyProfile/MyProfile';
import MyResults from './pages/MyResults/MyResults';
import NoMatterAnalysis from './pages/NoMatterAnalysis/NoMatterAnalysis';
import Possibilities from './pages/Possibilities/Possibilities';
import Refund from './pages/Refund/Refund';
import StructureAnalysis from './pages/StructureAnalysis/StructureAnalysis';
import Study from './pages/Study/Study';
import Studying from './pages/Studying/Studying';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [userInfo, setUserInfo] = useState({
    email: localStorage.getItem('userEmail')
      ? localStorage.getItem('userEmail')
      : '',
    name: localStorage.getItem('userName')
      ? localStorage.getItem('userName')
      : '',
  });
  const [isStartTestingHave, setIsStartTestingHave] = useState(false);
  const [calcView, setCalcView] = useState({});
  const [activeStarttestTabIndex, setActiveStarttestTabIndex] = useState(0);
  const [startTestResults, setStartTestResults] = useState({
    num1: null,
    num2: null,
    num3: null,
  });
  const [controlTestQuestions, setControlTestQuestions] = useState([]);
  const [showStartModal, setShowStartModal] = useState(
    localStorage.getItem('showStartModal') !== 'false',
  );
  const navigate = useNavigate();
  const location = useLocation();

  const getFirstTestsResult = async () => {
    let data = {
      token: localStorage.getItem('token'),
    };

    const response = await apiRequest({
      headers: data,
      url: '/get-start-test',
    });

    if (response.code === 0 && response.http_status === 200) {
      setStartTestResults(response.data);
    } else {
      toast.error(response.mes);
    }
  };

  const getTestQuestions = async () => {
    const response = await apiRequest({
      url: '/quiz/get-q',
    });

    if (response.length > 0) {
      setControlTestQuestions(response);
      setIsStartTestingHave(true);
    } else {
      toast.error('Ошибка при получении тестовых вопросов');
    }
  };

  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  };

  const pageInit = () => {
    const token = localStorage.getItem('token');

    if (token) {
      getFirstTestsResult();
      getTestQuestions();
    } else {
      navigate('/SignUp');
    }
  };

  useEffect(() => {
    pageInit();
  }, []);

  useEffect(() => {
    pageInit();
  }, [userInfo]);

  window.addEventListener('popstate', () => {
    if (!localStorage.getItem('token')) {
      navigate('/SignIn');
    }
  });

  return (
    <>
      <Context.Provider
        value={{
          activeStarttestTabIndex,
          controlTestQuestions,
          isStartTestingHave,
          setActiveStarttestTabIndex,
          setShowStartModal,
          setStartTestResults,
          setUserInfo,
          setCalcView,
          showStartModal,
          startTestResults,
          userInfo,
          calcView,
        }}
      >
        <Wrapper>
          <Routes>
            <Route element={<MyResults />} path='/'></Route>
            <Route element={<SignUp />} path='SignUp'></Route>
            <Route element={<SignIn />} path='SignIn'></Route>
            <Route element={<ForgotPass />} path='ForgotPass'></Route>
            <Route element={<Finplan />} path='finplan'></Route>
            <Route element={<Incomes />} path='incomes'></Route>
            <Route element={<Credit />} path='credit'></Route>
            <Route element={<AnalysisCashFlow />} path='FinAnalys'></Route>
            <Route element={<FinResults />} path='FinResults'></Route>
            <Route
              element={<NoMatterAnalysis />}
              path='NoMatterAnalysis'
            ></Route>
            <Route element={<FinConditions />} path='FinConditions'></Route>
            <Route
              element={<AnalysisEfficiency />}
              path='AnalysisEfficiency'
            ></Route>
            <Route element={<ActualAnalysis />} path='ActualAnalysis'></Route>
            <Route
              element={<StructureAnalysis />}
              path='StructureAnalysis'
            ></Route>
            <Route element={<Accounting />} path='accounting'></Route>
            <Route
              element={<AccountingIncomes />}
              path='AccountingIncomes'
            ></Route>
            <Route
              element={<AccountingCredit />}
              path='AccountingCredit'
            ></Route>
            <Route element={<Finmodel />} path='finmodeling'></Route>
            <Route element={<CreateSolution />} path='CreateSolution'></Route>
            <Route
              element={<CreateSolutionAim />}
              path='CreateSolutionAim'
            ></Route>
            <Route
              element={<CreateSolutionPriority />}
              path='CreateSolutionPriority'
            ></Route>
            <Route
              element={<CreateSolutionHome />}
              path='CreateSolutionHome'
            ></Route>
            <Route
              element={<CreateSolutionCar />}
              path='CreateSolutionCar'
            ></Route>
            <Route
              element={<CreateSolutionFlat />}
              path='CreateSolutionFlat'
            ></Route>
            <Route
              element={<CreateSolutionIndividual />}
              path='CreateSolutionIndividual'
            ></Route>
            <Route element={<MyResults />} path='MyResults'></Route>
            <Route element={<Refund />} path='Refund'></Route>
            <Route element={<Borrow />} path='Borrow'></Route>
            <Route element={<BasicNeeds />} path='BasicNeeds'></Route>
            <Route element={<Lifestyle />} path='Lifestyle'></Route>
            <Route element={<Fincashout />} path='Fincashout'></Route>
            <Route element={<Attachment />} path='Attachment'></Route>
            <Route element={<Debts />} path='Debts'></Route>
            <Route element={<Study />} path='Study'></Route>
            <Route element={<Studying />} path='Studying'></Route>
            <Route element={<MyProfile />} path='MyProfile'></Route>
            <Route element={<Possibilities />} path='Possibilities'></Route>
            <Route element={<AccountingDebts />} path='AccountingDebts'></Route>
            <Route
              element={<AccountingBalanceDebts />}
              path='AccountingBalanceDebts'
            ></Route>
            <Route
              element={<AccountingCachout />}
              path='AccountingCachout'
            ></Route>
            <Route
              element={<AccountingLifestyle />}
              path='AccountingLifestyle'
            ></Route>
            <Route
              element={<AccountingBasicNeeds />}
              path='AccountingBasicNeeds'
            ></Route>
            <Route
              element={<AccountingBalanceIncomes />}
              path='AccountingBalanceIncomes'
            ></Route>
            <Route
              element={<AccountingAttachment />}
              path='AccountingAttachment'
            ></Route>
            <Route
              element={<AccountingBorrowings />}
              path='AccountingBorrowings'
            ></Route>
            <Route
              element={<AccountingCashReturn />}
              path='AccountingCashReturn'
            ></Route>
            <Route
              element={<AccountingBalance />}
              path='AccountingBalance'
            ></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <Toaster
            position='top-right'
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: '14px',
              },
            }}
          />
        </Wrapper>
      </Context.Provider>
    </>
  );
}

export default App;
