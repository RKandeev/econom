import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import StudyFirst from '../StudyFirst/StudyFirst';
import StudySecond from '../StudySecond/StudySecond';

import './StudyBody.scss';
function StudyBody(props) {
  return (
    <div className="study_body">
      <h2 className="study_head">Обучение</h2>
      <Tabs className="react-tabs firstTestsTabs" defaultIndex={0}>
        <div className="left_tabs">
          <TabList className="react-tabs__tab-list firstTestsTabList">
            <h4>Курсы:</h4>
            <Tab>
              <span>Технология финансовой эффективности</span>
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
              <span>
                Технология выработки эффективных финансовых решений и стратегий
              </span>
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
          <Link className="full_course" to="/Study">
            <span>Пройти полное обучение</span>
          </Link>
        </div>

        <TabPanel>
          <StudyFirst />
        </TabPanel>
        <TabPanel>
          <StudySecond
            courseText="В рамках данного курса Вы освоите навык построения финансовых моделей и научитесь определять наиболее выгодные для себя решения в важных финансовых ситуациях, используя модуль «Финансовое моделирование» в ПАНЕЛИ УПРАВЛЕНИЯ "
            courseTitle="Технология выработки эффективных финансовых решений и стратегий"
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default StudyBody;
