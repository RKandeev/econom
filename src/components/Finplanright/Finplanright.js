import React from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Diagrambtn from '../Diagrambtn/Diagrambtn';
import Chdpp from '../FinPlanCharts/BarCharts/CHDPP';
import Sdpp from '../FinPlanCharts/BarCharts/SDPP';
import Mddp from '../FinPlanCharts/LineCharts/MDDP';
import Nadp from '../FinPlanCharts/LineCharts/NADP';
import Rnpp from '../FinPlanCharts/PieCharts/RNPP';
import SRPL from '../FinPlanCharts/PieCharts/SRPL';
import Mdop from '../FinPlanCharts/SensorCharts/MDOP';
import Naop from '../FinPlanCharts/SensorCharts/NAOP';

import dynamic from '../../img/analysisicons/dynamic.png';
import point from '../../img/analysisicons/point.png';
import chdppico from '../../img/chdppico.svg';
import mddico from '../../img/mdpico.svg';
import naonadico from '../../img/NAONADico.svg';
import rdpico from '../../img/rdpico.svg';
import sctructureico from '../../img/sctructureico.svg';
import dollar from '../../img/studyIcons/10.svg';

import styles from './Finplanright.module.scss';
function Finplanright(props) {
  return (
    <div className={styles.finplanright}>
      <h4>СВОД ФИНАНСОВОГО ПЛАНА</h4>
      <div className={styles.rightblocks}>
        <div className={styles.diagramblock}></div>
      </div>
      <Diagrambtn
        diagramImg={mddico}
        diagramTitle="Моя Доходность"
        modalTitle="Моя Доходность"
      >
        <Tabs>
          <TabList>
            <Tab>
              <div className="img_tab">
                <img alt="" src={point} />
                <div className="tabTitle">Оценка</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img alt="" src={dynamic} />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Mdop />
          </TabPanel>
          <TabPanel>
            <Mddp />
          </TabPanel>
        </Tabs>
      </Diagrambtn>
      <Diagrambtn
        diagramImg={naonadico}
        diagramTitle="Накопление Активов"
        modalTitle="Накопление Активов"
      >
        <Tabs>
          <TabList>
            <Tab>
              <div className="img_tab">
                <img alt="" src={point} />
                <div className="tabTitle">Оценка</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img alt="" src={dynamic} />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Naop />
          </TabPanel>
          <TabPanel>
            <Nadp />
          </TabPanel>
        </Tabs>
      </Diagrambtn>
      <Diagrambtn
        diagramImg={dollar}
        diagramTitle="Свод Денежных потоков"
        modalTitle="Свод денежных потоков"
      >
        <Sdpp />
      </Diagrambtn>
      <Diagrambtn
        diagramImg={chdppico}
        diagramTitle="Чистые Денежные потоки"
        modalTitle="Чистые Денежные потоки"
      >
        <Chdpp />
      </Diagrambtn>

      <Diagrambtn
        diagramImg={rdpico}
        diagramTitle="Распределение Доходов"
        modalTitle="Распределение Доходов"
      >
        <Rnpp />
      </Diagrambtn>
      <Diagrambtn
        diagramImg={sctructureico}
        diagramTitle="Структура Расходов"
        modalTitle="Структура Расходов"
      >
        <SRPL />
      </Diagrambtn>
    </div>
  );
}

export default Finplanright;
