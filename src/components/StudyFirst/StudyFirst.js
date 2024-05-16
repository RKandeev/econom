import React from "react";
import styles from "./StudyFirst.module.scss";
import studyIn from "../../img/studyIcons/1.svg";
import finEfficient from "../../img/studyIcons/2.svg";
import dollar from "../../img/studyIcons/3.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import finchoice from "../../img/studyIcons/7.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import { Link } from "react-router-dom";

function StudyFirst(props) {
  localStorage.removeItem("lessonNum");

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
          onClick={() => localStorage.setItem("lessonNum", "0")}
        >
          <img src={studyIn} alt="" />
          <div className={styles.lesson_title}>
            1. Введение в управление финансами
          </div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "1")}
        >
          <img src={finEfficient} alt="" />
          <div className={styles.lesson_title}>2. Финансовая эффективность</div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "2")}
          className={styles.lesson_block}
        >
          <img src={dollar} alt="" />
          <div className={styles.lesson_title}>
            3. Денежные потоки и финансовый баланс
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "3")}
          className={styles.lesson_block}
        >
          <img src={finplan} alt="" />
          <div className={styles.lesson_title}>
            4. Финансовое <br /> планирование
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "4")}
          className={styles.lesson_block}
        >
          <img src={finuchet} alt="" />
          <div className={styles.lesson_title}>5. Финансовый учёт</div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "5")}
          className={styles.lesson_block}
        >
          <img src={finanalys} alt="" />
          <div className={styles.lesson_title}>6. Финансовый анализ</div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "6")}
          className={styles.lesson_block}
        >
          <img src={finchoice} alt="" />
          <div className={styles.lesson_title}>7. Финансовые решения</div>
        </Link>
      </div>
    </div>
  );
}

export default StudyFirst;
