import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import StudySecond from '../StudySecond/StudySecond';

import mycourse from '../../img/icon__course.svg';

import '../StudyBody/StudyBody.scss';
import '../TestResultTabs/TestResultTabs.scss';
import './StudyingBody.scss';

function StudyingBody(props) {
  let num = localStorage.getItem('lessonNum');

  console.log();

  return (
    <div className="study_body">
      <h2 className="study_head">Обучение</h2>
      <Tabs
        className="react-tabs firstTestsTabs studyingTabs"
        defaultIndex={num}
      >
        <div className="left_tabs myResultLeftTabs">
          <h4 className="mobileHeader4">ТЕХНОЛОГИЯ ФИНАНСОВОЙ ЭФФЕКТИВНОСТИ</h4>
          <TabList className="react-tabs__tab-list firstTestsTabList">
            <h4>ТЕХНОЛОГИЯ ФИНАНСОВОЙ ЭФФЕКТИВНОСТИ</h4>
            <Tab>
              <span>1. Введение в управление финансами</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>2. Финансовая эффективность</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>3. Денежные потоки и финансовый баланс</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>4. Финансовое планирование</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>5. Финансовый учёт</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>6. Финансовый анализ</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
            <Tab>
              <span>7. Финансовые решения</span>
              <svg
                fill="none"
                height="10"
                viewBox="0 0 17 10"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3767 3.51957L13.6354 0.74999C13.5696 0.683599 13.4912 0.630903 13.4049 0.594942C13.3186 0.558981 13.226 0.540466 13.1325 0.540466C13.039 0.540466 12.9464 0.558981 12.8601 0.594942C12.7738 0.630903 12.6954 0.683599 12.6296 0.74999C12.4977 0.882705 12.4236 1.06223 12.4236 1.24937C12.4236 1.4365 12.4977 1.61602 12.6296 1.74874L15.1513 4.29166H0.708333C0.520472 4.29166 0.340304 4.36628 0.207466 4.49912C0.0746278 4.63196 0 4.81213 0 4.99999C0 5.18785 0.0746278 5.36802 0.207466 5.50086C0.340304 5.6337 0.520472 5.70832 0.708333 5.70832H15.1938L12.6296 8.26541C12.5632 8.33126 12.5105 8.4096 12.4745 8.49591C12.4386 8.58223 12.4201 8.67482 12.4201 8.76832C12.4201 8.86183 12.4386 8.95442 12.4745 9.04073C12.5105 9.12705 12.5632 9.20539 12.6296 9.27124C12.6954 9.33763 12.7738 9.39033 12.8601 9.42629C12.9464 9.46225 13.039 9.48076 13.1325 9.48076C13.226 9.48076 13.3186 9.46225 13.4049 9.42629C13.4912 9.39033 13.5696 9.33763 13.6354 9.27124L16.3767 6.52291C16.7746 6.12447 16.9981 5.58437 16.9981 5.02124C16.9981 4.45811 16.7746 3.91801 16.3767 3.51957Z"
                  fill="#464E5F"
                />
              </svg>
            </Tab>
          </TabList>
          <Link to="/Study">
            <div className="returnLink">
              <img alt="" src={mycourse} />
              Вернуться к списку курсов
            </div>
          </Link>
        </div>

        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматриваются базовые понятия управления финансами и закладывается основа для изучения следующих тем курса"
            courseTitle="Введение в управление финансами"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматриваются финансовые показатели, помогающие понимать, насколько эффективно мы управляем своими финансами "
            courseTitle="Финансовая эффективность"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматриваются виды и структура денежных потоков, а также разбирается личный финансовый баланс, его содержание и структура"
            courseTitle="Денежные потоки и финансовый баланс"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматривается пошаговый процесс построения финансового плана с помощью модуля «Финансовое планирование» в ПАНЕЛИ УПРАВЛЕНИЯ "
            courseTitle="Финансовое планирование"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматривается порядок учёта денежных потоков и построения личного финансового баланса с помощью модуля «Финансовый учёт» в ПАНЕЛИ УПРАВЛЕНИЯ"
            courseTitle="Финансовый учёт"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseTitle="Финансовый анализ"
            courseText="В рамках данной темы рассматривается технология проведения анализа денежных
потоков и показателей финансовой эффективности с помощью модуля «Финансовый
анализ» в ПАНЕЛИ УПРАВЛЕНИЯ"
          />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данной темы рассматриваются основные типы финансовых решений, которые нам приходится принимать, и их влияние на показатели нашего финансового состояния"
            courseTitle="Финансовые решения"
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default StudyingBody;
