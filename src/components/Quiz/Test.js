import { useContext, useEffect, useRef, useState } from 'react';

import toast from 'react-hot-toast';

import { apiRequest } from '../../api';
import { Context } from '../../Context';
import SensorChart from '../SensorChart/SensorChart';

import './Quiz.scss';

const Test = () => {
  const {controlTestQuestions} = useContext(Context);
  const inputRefs = useRef([]);

  const [correctAnswers, setCorrectAnswers] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);

  const { q, variant_list, multi_answer, id } =
    controlTestQuestions[activeQuestion];

  const onClickNext = async (event) => {
    if (event.target.innerText === 'ЗАВЕРШИТЬ') {
      const updatedResult = [...result, {a: selectedAnswer, q_id: id}];

      let data = {
        result_list: updatedResult,
        token: localStorage.getItem('token'),
      };
      const response = await apiRequest({
        data: data,
        method: 'POST',
        url: '/quiz/set-a',
      });

      if (response.code === 0 && response.http_status === 200) {
        setCorrectAnswers(response.data);
        setShowResult(true);
      } else {
        toast.error(response.mes);
      }
    } else {
      setResult(prev => [...prev, {a: selectedAnswer.map(item => Number(item) + 1), q_id: id}]);
      setActiveQuestion(prev => prev + 1);
      setSelectedAnswer([]);
    }
  };

  useEffect(() => {
    inputRefs.current.map((el) => {
      if (el) el.checked = false;
    });
  }, [activeQuestion]);

  const onAnswerSelected = (answer, index, event) => {
    let stringIndex = index.toString();

    if (event.target.checked) {
      multi_answer? setSelectedAnswer((prev) => [...prev, stringIndex]): setSelectedAnswer([stringIndex]);
    } else {
      const filteredAnswers = selectedAnswer.filter(item => item !== index);

      multi_answer? setSelectedAnswer(filteredAnswers): setSelectedAnswer([stringIndex]);
    }
  };

  let activeNum = activeQuestion + 1;
  let dynamicWidth = 'calc(100% * ' + activeNum + '/' + controlTestQuestions.length + ')';

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="testingBlock">
          <div className="progress-counter">
            <span className="active-question-no">{activeQuestion + 1}</span>
            <span className="total-question">
              &nbsp;из&nbsp;{controlTestQuestions.length}
            </span>
          </div>
          <div className="progress-bar" id="progress-bar">
            <div
              id="progressBarFull"
              style={{
                width: dynamicWidth,
              }}
            ></div>
          </div>
          <h3 dangerouslySetInnerHTML={{ __html: q}}></h3>
          <form className="answers_block">
            {variant_list && variant_list.map((answer, index) => (
              <div key={index} className="form_check">
                <input
                  key={answer}
                  ref={el => inputRefs.current[index] = el}
                  className="firstTestForm"
                  data-number={index}
                  id={'inputDefault' + index}
                  name="inputDefault"
                  type={multi_answer? 'checkbox' : 'radio'}
                  onChange={(event) => onAnswerSelected(answer, index, event)}
                />
                <label
                  className="form_check_label"
                  htmlFor={'inputDefault' + index}
                >
                  {answer}
                </label>
              </div>
            ))}
          </form>
          <div className="answers-info">
            {multi_answer
              ? '* - можно выбрать несколько вариантов'
              : ''}
          </div>
          <div className="flex-right">
            <button
              disabled={selectedAnswer.length === 0}
              onClick={ (event) => onClickNext(event)}
            >
              {activeQuestion === controlTestQuestions.length - 1 ? 'Завершить' : 'Дальше'}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-100">
          <SensorChart isControlTest result={correctAnswers.correct_perc}/>
        </div>
      )}
    </div>
  );
};

export default Test;
