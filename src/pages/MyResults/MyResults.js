import React, { useContext, useState } from 'react';

import toast from 'react-hot-toast';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { apiRequest } from '../../api';
import Checkcustom from '../../components/Checkcustom/Checkcustom';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import ModalStart from '../../components/Modal/ModalStart';
import MyResultsBody from '../../components/MyResultsBody/MyResultsBody';
import MyResultsLeftNav from '../../components/MyResultsleftnav/MyResultsLeftNav';
import { Context } from '../../Context';
import animationData from '../../img/json/logo.json';

import styles from './MyResults.module.scss';
import Spinner from '../../components/Spinner/Spinner';

function MyResults(props) {
  const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: false,
    renderer: 'svg',
  };
  const [startModalChangeVisible, setStartModalChangeVisible] = useState(false);

  const { showStartModal, setShowStartModal } = useContext(Context);

  const helloModalActiveHandle = () => {
    setStartModalChangeVisible(!startModalChangeVisible);
  };

  const closeStartModalHandler = async () => {
    if (startModalChangeVisible) {
      let data = {
        token: localStorage.getItem('token'),
        value: 0,
      };

      const response = await apiRequest({
        data: data,
        method: 'POST',
        url: '/set-show-it',
      });

      if (response.code === 0 && response.http_status === 200) {
        setShowStartModal(false);
        localStorage.setItem('showStartModal', 'false');
      } else {
        toast.error(response.mes);
      }
    } else {
      setShowStartModal(false);
    }
  };

  return (
    <>
      {/*<Spinner />*/}
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <MyResultsLeftNav />
        <MyResultsBody />
      </div>
      <ModalStart
        active={showStartModal}
        justify='center'
        modalTitle=''
        modalVis='hidden'
        setActive={closeStartModalHandler}
      >
        <h4 className={styles.resultModalHeader}>
          Благодарим Вас за интерес к нашей Платформе!
        </h4>
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
          Вашего стартового уровня в разделе{' '}
          <span
            className={styles.resultModalLink}
            onClick={() => closeStartModalHandler()}
          >
            Мои результаты
          </span>{' '}
          и прохождения{' '}
          <Link to='/Studying'>
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
          <button
            className={styles.closeBtn}
            onClick={() => closeStartModalHandler()}
          >
            Закрыть
          </button>
          <div className={styles.openAgain}>
            <Checkcustom
              label='Больше не показывать'
              onChange={helloModalActiveHandle}
            />
          </div>
        </p>
      </ModalStart>
    </>
  );
}

export default MyResults;
