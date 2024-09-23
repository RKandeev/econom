import React, { useState } from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./MyResults.module.scss";
import MyResultsBody from "../../components/MyResultsBody/MyResultsBody";
import MyResultsLeftNav from "../../components/MyResultsleftnav/MyResultsLeftNav";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../img/json/logo.json";
import Checkcustom from "../../components/Checkcustom/Checkcustom";

function MyResults(props) {
  const [helloModalActive, SetHelloModalActive] = useState(true);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <MyResultsLeftNav />
        <MyResultsBody />
      </div>
      <Modal
        active={helloModalActive}
        SetActive={SetHelloModalActive}
        modalTitle="Благодарим Вас за интерес к нашей Платформе!"
      >
        <div className={styles.logoAnim}>
          <p>
            <Lottie options={defaultOptions}></Lottie>
          </p>
        </div>
        <p className={styles.resultText}>
          Мы создали её, используя свой опыт в сфере управления финансами
          бизнеса и в области разработки аналитических систем. <br /> Надеемся,
          что наша Платформа принесет Вам пользу и позволит встать на путь
          Финансовой Эффективности! <br /> Рекомендуем начать с определения
          Вашего стартового уровня в разделе{" "}
          <span
            className={styles.resultModalLink}
            onClick={() => SetHelloModalActive(false)}
          >
            Мои результаты
          </span>{" "}
          и прохождения{" "}
          <Link to="/Studying">
            <span className={styles.resultModalLink}>Обучения</span>
          </Link>
          <p className={styles.sign}>
            С уважением,
            <br />
            основатель Проекта,
            <br />
            кандидат экономических наук <br />
            Исмагилов Шамиль
          </p>
          <div className={styles.openAgain}>
            <Checkcustom label="Больше не показывать" />
          </div>
        </p>
      </Modal>
    </>
  );
}

export default MyResults;
