import React, { useState } from 'react';

import ru from 'date-fns/locale/ru';
import { Container } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './InlineCalendar.scss';
registerLocale('ru', ru);

function Reactdatepicker(props) {
  const [selectesDate, setSelectedDate] = useState('');

  return (
    <React.Fragment>
      <Container>
        <div className="row" style={{ visibility: `${props.calendarVis}` }}>
          <div className="col-sm-10">
            <h5 className="mt-3 mb-4 text-white"> React Date picker</h5>

            <form className="row">
              <div className="row mb-4">
                <label className="col-sm-2 col-form-label"> </label>
                <div className="col-sm-5">
                  <DatePicker
                    dateFormat="dd.MM.yyyy"
                    locale="ru"
                    placeholderText="Выберите дату"
                    selected={selectesDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                    //minDate={ new Date()}
                    //maxDate={ new Date()}
                    //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
                    // isClearable
                  />
                </div>
              </div>

              <div className="row mb-4">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-4"></div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Reactdatepicker;
