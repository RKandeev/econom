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
                <div className='col-sm-5'>
                  <DatePicker
                    inline
                    dateFormat='dd.MM.yyyy'
                    locale='ru'
                    placeholderText='Выберите дату'
                    selected={selectesDate}
                    onChange={(date) => changeSelectedDayHandler(date)}
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
