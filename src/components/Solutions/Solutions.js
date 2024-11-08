import React from 'react';

import SolutionBtn from '../SolutionBtn/SolutionBtn';

import carico from '../../img/icon/icon__car.svg';
import billico from '../../img/icon/icon__card-bill.svg';
import homeico from '../../img/icon/icon__home.svg';
import keyico from '../../img/icon/icon__key.svg';
import paymentico from '../../img/icon/icon__payment.svg';
import walletico from '../../img/icon/icon__wallet.svg';

import styles from './Solutions.module.scss';

function Solutions(props) {
  return (
    <>
      <div className={styles.solutionButtons}>
        <h3>Создать расчет</h3>
        <SolutionBtn
          linkAdress='/CreateSolutionAim'
          solutionLogo={walletico}
          solutionTitle='Досрочное погашение кредитов: целесообразность'
        />
        <SolutionBtn
          linkAdress='/CreateSolutionPriority'
          solutionLogo={walletico}
          solutionTitle='Досрочное погашение кредитов: приоритет'
        />
        <SolutionBtn
          linkAdress='/CreateSolution'
          solutionLogo={paymentico}
          solutionTitle='Рефинансирование кредитов: целесообразность'
        />
        <SolutionBtn
          linkAdress='/CreateSolutionHome'
          solutionLogo={homeico}
          solutionTitle='Жилищный вопрос: покупка или аренда'
        />
        <SolutionBtn
          linkAdress='/CreateSolutionCar'
          solutionLogo={carico}
          solutionTitle='Покупка автомобиля: оценка финансовых последствий'
        />
        <SolutionBtn
          linkAdress='/CreateSolutionFlat'
          solutionLogo={keyico}
          solutionTitle='Квартира для сдачи в аренду: оценка выгод'
        />
        <SolutionBtn
          linkAdress='/CreateSolutionIndividual'
          solutionLogo={billico}
          solutionTitle='Индивидуальные финансовые модели'
        />
      </div>
    </>
  );
}

export default Solutions;
