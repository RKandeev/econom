import React from 'react';
import styles from './Solutions.module.scss'
import SolutionBtn from "../SolutionBtn/SolutionBtn";
import walletico from "../../img/icon/icon__wallet.svg"
import paymentico from "../../img/icon/icon__payment.svg"
import carico from "../../img/icon/icon__car.svg"
import homeico from "../../img/icon/icon__home.svg"
import keyico from "../../img/icon/icon__key.svg"
import billico from "../../img/icon/icon__card-bill.svg"
import otherico from "../../img/icon/icon__others.svg"


function Solutions(props) {
    return (
        <>
            <div className={styles.solutionButtons}>
                <SolutionBtn solutionLogo={walletico} solutionTitle="Досрочное погашение кредитов: целесообразность"/>
                <SolutionBtn solutionLogo={paymentico} solutionTitle="Досрочное погашение кредитов: приоритет"/>
                <SolutionBtn solutionLogo={homeico} solutionTitle="Рефинансирование кредитов: целесообразность"/>
                <SolutionBtn solutionLogo={carico} solutionTitle="Жилищный вопрос: покупка или аренда"/>
                <SolutionBtn solutionLogo={keyico} solutionTitle="Покупка автомобиля: оценка финансовых последствий"/>
                <SolutionBtn solutionLogo={billico} solutionTitle="Квартира для сдачи в аренду: оценка выгод"/>
                <SolutionBtn solutionLogo={otherico} solutionTitle="Конструктор индивидуальных ситуаций"/>
            </div>
        </>
    );
}

export default Solutions;