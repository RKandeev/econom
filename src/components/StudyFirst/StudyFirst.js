import React from 'react';

import { Link } from 'react-router-dom';

import finanalys from '../../img/icon__fin-analiz.svg';
import finplan from '../../img/icon__fin-plan.svg';
import finuchet from '../../img/icon__fin-uchet.svg';
import studyIn from '../../img/studyIcons/1.svg';
import finEfficient from '../../img/studyIcons/2.svg';
import dollar from '../../img/studyIcons/3.svg';
import finchoice from '../../img/studyIcons/7.svg';

import styles from './StudyFirst.module.scss';

function StudyFirst(props) {
  localStorage.removeItem('lessonNum');

  return (
    <div className={styles.Studyfirst}>
      <h2>Технология финансовой эффективности</h2>
      <p>
        В рамках данного базового курса Вы освоите технологию управления своими
        финансами и научитесь применять её в жизни с использованием нашей ПАНЕЛИ
        УПРАВЛЕНИЯ
      </p>
      <div className={styles.lesson_blocks}>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '0')}
        >
          <img alt="" src={studyIn} />
          <div className={styles.lesson_title}>
            1. Введение в управление финансами
          </div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '1')}
        >
          <img alt="" src={finEfficient} />
          <div className={styles.lesson_title}>2. Финансовая эффективность</div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '2')}
        >
          <img alt="" src={dollar} />
          <div className={styles.lesson_title}>
            3. Денежные потоки и финансовый баланс
          </div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '3')}
        >
          <img alt="" src={finplan} />
          <div className={styles.lesson_title}>
            4. Финансовое <br /> планирование
          </div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '4')}
        >
          <img alt="" src={finuchet} />
          <div className={styles.lesson_title}>5. Финансовый учёт</div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '5')}
        >
          <img alt="" src={finanalys} />
          <div className={styles.lesson_title}>6. Финансовый анализ</div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem('lessonNum', '6')}
        >
          <img alt="" src={finchoice} />
          <div className={styles.lesson_title}>7. Финансовые решения</div>
        </Link>
      </div>
    </div>
  );
}

export default StudyFirst;
