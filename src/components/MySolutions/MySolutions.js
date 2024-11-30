import React, { useContext, useEffect, useState } from 'react';

import MySolution from '../MySolution/MySolution';

import styles from './MySolutions.module.scss';
import { apiRequest } from '../../api';
import toast from 'react-hot-toast';
import { Context } from '../../Context';
import { useNavigate } from 'react-router-dom';

function MySolutions({historyUrl, deleteHistoryUrl}) {
  const {setCalcView} = useContext(Context);
  const [solutionsHistory, setSolutionsHistory] = useState([]);

  const navigate = useNavigate();


  const getSolutionsHistory =  async () => {

    let data = {
      token: localStorage.getItem('token'),
    };

    const response= await apiRequest({
      url: historyUrl,
      headers: data,
    })

    if (!response) {
      toast.error('Неопознанная ошибка');

      return;
    }

    if (response.code === 0 && response.http_status === 200) {
      let newHistories = [];
      response.data.forEach((item) => {
        item.updated_at = item.updated_at.split('T')[0];
        newHistories.push(item);
      });
      setSolutionsHistory(newHistories.reverse());
    } else {
      toast.error(response.mes);
    }

  }

  const viewSolutionHistory = (id) => {
    const currentCalcObject = solutionsHistory.find((item) => item.id === id);
    setCalcView(currentCalcObject)
    let navigateUrl

    switch (historyUrl) {
      case '/fin-model/rationality-history':
        navigateUrl = 'CreateSolutionAim';
        break;
      case '/fin-model/priority-history':
        navigateUrl = 'CreateSolutionPriority';
        break;
      case '/':
        navigateUrl = 'CreateSolution';
        break;
      case '/fin-model/buy-or-rent-history':
        navigateUrl = 'CreateSolutionHome';
        break;
      case '/fin-model/buy-car-or-invest-history':
        navigateUrl = 'CreateSolutionCar';
        break;
      case '/fin-model/buy-flat-or-invest-history':
        navigateUrl = 'CreateSolutionFlat';
        break;
    }

    navigate(`/${navigateUrl}?calcId=${id}`);
  }

  const deleteSolutionHistory = async (id) => {
    let data = {
      id: id,
      token: localStorage.getItem('token'),
    };

    const response= await apiRequest({
      url: deleteHistoryUrl,
      data,
      method: 'POST',
    })

    if (!response) {
      toast.error('Неопознанная ошибка');

      return;
    }

    if (response.code === 0 && response.http_status === 200) {
      toast.success(response.mes);
      const filteredArray = [...solutionsHistory.filter((item) => item.id !== id)] ;
      setSolutionsHistory(filteredArray);
    } else {
      toast.error(response.mes);
    }

  }

  useEffect(() => {
    getSolutionsHistory();
  },[]);


  return (
    <>
      <div className={styles.solutionsBlock}>
        <h3>история</h3>
        <div className={styles.solutionList}>
          {
            solutionsHistory.length && solutionsHistory.map((item, index) => (
              <MySolution
                key={index}
                onDelete={() => deleteSolutionHistory(item.id)}
                onClick={() => viewSolutionHistory(item.id)}
                solutionTitle= {item.calc_name}
                solutionDate= {item.updated_at}
              />
            ))
          }
          {
            !solutionsHistory.length && <p>Нет сохраненных расчетов</p>
          }
        </div>
      </div>
    </>
  );
}

export default MySolutions;
