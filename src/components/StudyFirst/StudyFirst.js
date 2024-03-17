import React from "react";
import styles from "./StudyFirst.module.scss";
import { Link } from "react-router-dom";

function StudyFirst(props) {
  localStorage.removeItem("lessonNum");

  return (
    <div className={styles.Studyfirst}>
      <h2>Технология финансовой эффективности</h2>
      <p>
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
        несколько абзацев более менее осмысленного текста рыбы на русском языке,
        а начинающему оратору отточить навык публичных выступлений в домашних
        условиях. При создании генератора мы использовали небезизвестный
        универсальный код речей
      </p>
      <div className={styles.lesson_blocks}>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "0")}
        >
          <div className={styles.lesson_number}>Тема 1</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          className={styles.lesson_block}
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "1")}
        >
          <div className={styles.lesson_number}>Тема 2</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "2")}
          className={styles.lesson_block}
        >
          <div className={styles.lesson_number}>Тема 3</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "3")}
          className={styles.lesson_block}
        >
          <div className={styles.lesson_number}>Тема 4</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "4")}
          className={styles.lesson_block}
        >
          <div className={styles.lesson_number}>Тема 5</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "5")}
          className={styles.lesson_block}
        >
          <div className={styles.lesson_number}>Тема 6</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
        <Link
          to="/Studying"
          onClick={() => localStorage.setItem("lessonNum", "6")}
          className={styles.lesson_block}
        >
          <div className={styles.lesson_number}>Тема 7</div>
          <div className={styles.lesson_title}>
            Введение в управление финансами
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StudyFirst;
