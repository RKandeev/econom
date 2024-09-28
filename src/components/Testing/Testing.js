import React from "react";
import "./Testing.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Chart from "../Chart/Chart";
import Test from "../Quiz/Test";
import TestHistory from "../FinPlanCharts/BarCharts/TestHistory";
function Testing(props) {
  return (
    <div>
      <Tabs className="react-tabs TestingTabs">
        <TabList className="react-tabs__tab-list TestingTabList">
          <Tab>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99875 21.0037H5.9975C4.33995 21.0037 2.99625 19.66 2.99625 18.0025V5.9975C2.99625 4.33995 4.33995 2.99625 5.9975 2.99625H18.0025C19.66 2.99625 21.0037 4.33995 21.0037 5.9975V8.99875"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7231 20.7106C14.5356 20.8983 14.2811 21.0037 14.0158 21.0037H12V18.9879C12 18.7226 12.1055 18.4682 12.2931 18.2806L18.2196 12.3491C18.5425 12.0262 18.9804 11.8448 19.4371 11.8448C19.8938 11.8448 20.3317 12.0262 20.6546 12.3491V12.3491C20.9778 12.6719 21.1594 13.1099 21.1594 13.5667C21.1594 14.0234 20.9778 14.4614 20.6546 14.7842L14.7231 20.7106Z"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0127 14.5631L18.4437 16.9941"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.1684 15.2694L21.0688 16.1697V16.1697C21.5427 16.6446 21.5427 17.4136 21.0688 17.8885L19.9793 18.9789"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.24886 10.9996H14.0008"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.24886 7.12297H16.0017"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.12255 11.1246C6.19162 11.1246 6.24761 11.0686 6.24761 10.9996C6.24761 10.9305 6.19162 10.8745 6.12255 10.8745C6.05349 10.8745 5.9975 10.9305 5.9975 10.9996C5.9975 11.0686 6.05349 11.1246 6.12255 11.1246"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.12255 7.24802C6.19162 7.24802 6.24761 7.19203 6.24761 7.12297C6.24761 7.0539 6.19162 6.99791 6.12255 6.99791C6.05349 6.99791 5.9975 7.0539 5.9975 7.12297C5.9975 7.19203 6.05349 7.24802 6.12255 7.24802"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.24886 14.8762H10.9996"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.12255 15.0013C6.19162 15.0013 6.24761 14.9453 6.24761 14.8762C6.24761 14.8071 6.19162 14.7511 6.12255 14.7511C6.05349 14.7511 5.9975 14.8071 5.9975 14.8762C5.9975 14.9453 6.05349 15.0013 6.12255 15.0013"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Пройти тест
          </Tab>
          <Tab>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_256_2022)">
                <path
                  d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z"
                  fill="#464E5F"
                />
                <path
                  d="M10 5C9.77899 5 9.56703 5.0878 9.41075 5.24408C9.25447 5.40036 9.16667 5.61232 9.16667 5.83333V9.4375L6.35751 11.1975C6.16964 11.3149 6.0361 11.502 5.98624 11.7179C5.93639 11.9337 5.97431 12.1605 6.09167 12.3483C6.20903 12.5362 6.39621 12.6697 6.61203 12.7196C6.82786 12.7694 7.05464 12.7315 7.24251 12.6142L10.4425 10.6142C10.5634 10.5384 10.6628 10.4329 10.7313 10.3077C10.7997 10.1825 10.8349 10.0418 10.8333 9.89917V5.83333C10.8333 5.61232 10.7455 5.40036 10.5893 5.24408C10.433 5.0878 10.221 5 10 5Z"
                  fill="#464E5F"
                />
              </g>
              <defs>
                <clipPath id="clip0_256_2022">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            История тестирования
          </Tab>
        </TabList>
        <TabPanel className="">
          <Test />
        </TabPanel>
        <TabPanel className="testResultChart">
          <TestHistory />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Testing;
