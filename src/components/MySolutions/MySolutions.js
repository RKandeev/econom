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
      setSolutionsHistory(response.data.reverse());
    } else {
      toast.error(response.mes);
    }

  }

  const viewSolutionHistory = (id) => {
    const currentCalcObject = solutionsHistory.find((item) => item.id === id);
    setCalcView(currentCalcObject)
    navigate(`/CreateSolutionAim?calcId=${id}`);
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
      const filteredArray = [[...solutionsHistory[0].filter((item) => item.id !== id)]] ;
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
                solutionTitle= {item.credit_name}
                solutionDate= {item.updated_at}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default MySolutions;
