import React, { useContext, useEffect, useState } from 'react';

import ru from 'date-fns/locale/ru';
import { Container } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';

import { Context } from '../../Context';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './InlineCalendar.scss';
registerLocale('ru', ru);

function Reactdatepicker(props) {
  const [selectesDate, setSelectedDate] = useState('');
  const { getAccountingData } = useContext(Context);

  const changeSelectedDayHandler = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const currentDate = `${year}-${month}-${day}`;

    getAccountingData(currentDate);
    setSelectedDate(currentDate);
  };

  useEffect(() => {
    console.log(selectesDate);
  }, [selectesDate]);

  return (
    <React.Fragment>
      <Container>
        <div className='row' style={{ visibility: `${props.calendarVis}` }}>
          <div className='col-sm-10'>
            <h5 className='mt-3 mb-4 text-white'> React Date picker</h5>

            <form className='row'>
              <div className='row mb-4'>
                <label className='col-sm-2 col-form-label'> </label>
                <div className='col-sm-12'>
                  <DatePicker
                    dateFormat='dd  MMMM  yyyy'
                    locale='ru'
                    selected={selectesDate}
                    onChange={(date) => changeSelectedDayHandler(date)}
                    showIcon
                    icon={
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.9975 3.99756C1.9975 2.89299 2.89293 1.99756 3.9975 1.99756H12.0025C13.1071 1.99756 14.0025 2.89299 14.0025 3.99756V12.0026C14.0025 13.1071 13.1071 14.0026 12.0025 14.0026H3.9975C2.89293 14.0026 1.9975 13.1071 1.9975 12.0026V3.99756Z'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M14.0025 5.33225H1.9975'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5348 7.66648C11.5348 7.6849 11.5199 7.69983 11.5014 7.69983C11.483 7.69983 11.4681 7.6849 11.4681 7.66648C11.4681 7.64806 11.483 7.63313 11.5014 7.63313'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5015 7.6332C11.5199 7.6332 11.5348 7.64813 11.5348 7.66655'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.19983 7.66648C9.19983 7.6849 9.1849 7.69983 9.16648 7.69983C9.14806 7.69983 9.13313 7.6849 9.13313 7.66648C9.13313 7.64806 9.14806 7.63313 9.16648 7.63313'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.16647 7.6332C9.18489 7.6332 9.19982 7.64813 9.19982 7.66655'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.86554 7.66648C6.86554 7.6849 6.85061 7.69983 6.83219 7.69983C6.81377 7.69983 6.79884 7.6849 6.79884 7.66648C6.79884 7.64806 6.81377 7.63313 6.83219 7.63313'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.83218 7.6332C6.8506 7.6332 6.86553 7.64813 6.86553 7.66655'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M4.53122 9.66746C4.53122 9.68587 4.51629 9.7008 4.49787 9.7008C4.47945 9.7008 4.46452 9.68587 4.46452 9.66746C4.46452 9.64904 4.47945 9.63411 4.49787 9.63411'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M4.49786 9.63394C4.51628 9.63394 4.53121 9.64887 4.53121 9.66728'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.86554 9.66746C6.86554 9.68587 6.85061 9.7008 6.83219 9.7008C6.81377 9.7008 6.79884 9.68587 6.79884 9.66746C6.79884 9.64904 6.81377 9.63411 6.83219 9.63411'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.83218 9.63394C6.8506 9.63394 6.86553 9.64887 6.86553 9.66728'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.19983 9.66746C9.19983 9.68587 9.1849 9.7008 9.16648 9.7008C9.14806 9.7008 9.13313 9.68587 9.13313 9.66746C9.13313 9.64904 9.14806 9.63411 9.16648 9.63411'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.16647 9.63394C9.18489 9.63394 9.19982 9.64887 9.19982 9.66728'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5348 9.66746C11.5348 9.68587 11.5199 9.7008 11.5014 9.7008C11.483 9.7008 11.4681 9.68587 11.4681 9.66746C11.4681 9.64904 11.483 9.63411 11.5014 9.63411'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5015 9.63394C11.5199 9.63394 11.5348 9.64887 11.5348 9.66728'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5348 11.6682C11.5348 11.6866 11.5199 11.7015 11.5014 11.7015C11.483 11.7015 11.4681 11.6866 11.4681 11.6682C11.4681 11.6498 11.483 11.6348 11.5014 11.6348'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M11.5015 11.6349C11.5199 11.6349 11.5348 11.6498 11.5348 11.6683'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.19983 11.6682C9.19983 11.6866 9.1849 11.7015 9.16648 11.7015C9.14806 11.7015 9.13313 11.6866 9.13313 11.6682C9.13313 11.6498 9.14806 11.6348 9.16648 11.6348'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M9.16647 11.6349C9.18489 11.6349 9.19982 11.6498 9.19982 11.6683'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.86554 11.6682C6.86554 11.6866 6.85061 11.7015 6.83219 11.7015C6.81377 11.7015 6.79884 11.6866 6.79884 11.6682C6.79884 11.6498 6.81377 11.6348 6.83219 11.6348'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M6.83218 11.6349C6.8506 11.6349 6.86553 11.6498 6.86553 11.6683'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M4.53122 11.6682C4.53122 11.6866 4.51629 11.7015 4.49787 11.7015C4.47945 11.7015 4.46452 11.6866 4.46452 11.6682C4.46452 11.6498 4.47945 11.6348 4.49787 11.6348'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M4.49786 11.6349C4.51628 11.6349 4.53121 11.6498 4.53121 11.6683'
                          stroke='#464E5F'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    }
                  />
                </div>
              </div>

              <div className='row mb-4'>
                <label className='col-sm-2 col-form-label'></label>
                <div className='col-sm-4'></div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Reactdatepicker;
