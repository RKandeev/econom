import React, {useEffect, useState} from 'react';

import { apiRequest } from '../../api';

import '../Quiz/Quiz.scss';

const questions = [
  {
    answers: [
      {
        answer: 'превышают запланированную сумму',
        id: 1,
      },
      {
        answer: 'не превышают запланированную сумму',
        id: 2,
      },
      {
        answer: 'у меня нет плана расходов на месяц',
        id: 3,
      },
      {
        answer: 'не знаю',
        id: 4,
      },
    ],
    axis: true,
    correct_answer: [2],
    input_type: 'radio',
    question: 'Как правило, Ваши расходы по итогам месяца',
  },
  {
    answers: [
      {
        answer: 'всегда',
        id: 1,
      },
      {
        answer: 'чаще «да», чем «нет» ',
        id: 2,
      },
      {
        answer: 'чаще «нет», чем «да»',
        id: 3,
      },
      {
        answer: 'никогда',
        id: 4,
      },
      {
        answer: 'не знаю ',
        id: 5,
      },
    ],
    axis: true,
    correct_answer: [1],
    half: [2],
    input_type: 'radio',
    question: 'Ваши ежемесячные доходы (заработная плата, бизнес, фриланс) превышают ежемесячные расходы:',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'никакую',
        id: 2,
      },
      {
        answer: 'менее 10%',
        id: 3,
      },
      {
        answer: 'от 10 до 20%',
        id: 4,
      },
      {
        answer: 'более 20%',
        id: 5,
      },
    ],
    axis: true,
    correct_answer: [3],
    input_type: 'radio',
    over1: [4],
    over2: [5],
    question: 'Какую часть своих ежемесячных доходов Вам удается откладывать в накопления:',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'менее 30%',
        id: 2,
      },
      {
        answer: 'от 30 до 50%',
        id: 3,
      },
      {
        answer: 'более 50%',
        id: 4,
      },
    ],
    axis: true,
    correct_answer: ['4'],
    half: ['3'],
    input_type: 'radio',
    question: 'Какую часть сделанных за месяц накоплений Вы, как правило, вкладываете в доходные активы (валюта, вклады, ценные бумаги и т.д.):',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'менее 10%',
        id: 2,
      },
      {
        answer: 'от 10 до 20%',
        id: 3,
      },
      {
        answer: 'более 20%',
        id: 4,
      },
      {
        answer: 'более 50%',
        id: 5,
      },
    ],
    axis: false,
    correct_answer: [4, 5],
    half: ['3'],
    input_type: 'checkbox',
    question: 'Если взять за 100% общую сумму принадлежащих Вам активов (недвижимость, автомобили, деньги, вклады, ценные бумаги и пр.), какая доля приходится на финансовые активы (деньги, вклады, ценные бумаги):',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'таких активов не имею',
        id: 2,
      },
      {
        answer: 'менее 20%',
        id: 3,
      },
      {
        answer: 'от 20% до 50%',
        id: 4,
      },
      {
        answer: 'более 50%',
        id: 5,
      },
    ],
    axis: false,
    correct_answer: [5],
    half: [4],
    input_type: 'radio',
    question: 'Какая часть Ваших активов приходится на имущество, которое может приносить Вам доход (сдаваемая в аренду недвижимость, ценные бумаги, вклады и т.д.):',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'никакого',
        id: 2,
      },
      {
        answer: 'меньше уровня инфляции',
        id: 3,
      },
      {
        answer: 'больше уровня инфляции, но меньше ключевой ставки ЦБ',
        id: 4,
      },
      {
        answer: 'больше ключевой ставки ЦБ',
        id: 5,
      },
    ],
    axis: true,
    correct_answer: [5],
    half: [4],
    input_type: 'radio',
    question: 'Какой доход (в среднем) приносят Ваши активы:',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'долги больше активов ',
        id: 2,
      },
      {
        answer: 'примерно равны между собой ',
        id: 3,
      },
      {
        answer: 'активы немного больше долгов',
        id: 4,
      },
      {
        answer: 'активы больше долгов в 2 раза и более',
        id: 5,
      },
    ],
    axis: false,
    correct_answer: [5],
    input_type: 'radio',
    question: 'Как соотносятся между собой сумма Ваших активов (недвижимость, автомобили, деньги, вклады, ценные бумаги и пр.) и суммарные долги по кредитам и займам:',
  },
  {
    answers: [
      {
        answer: 'не знаю',
        id: 1,
      },
      {
        answer: 'менее 10%',
        id: 2,
      },
      {
        answer: 'от 10 до 20% ',
        id: 3,
      },
      {
        answer: 'от 20 до 30% ',
        id: 4,
      },
      {
        answer: 'более 30% ',
        id: 5,
      },
    ],
    axis: false,
    correct_answer: [2, 3],
    half: ['4'],
    input_type: 'checkbox',
    question: 'Какая часть Ваших ежемесячных доходов уходит на платежи по кредитам:',
  },
  {
    answers: [
      {
        answer: 'менее 1 месяца',
        id: 1,
      },
      {
        answer: 'от 1 до 3 месяцев ',
        id: 2,
      },
      {
        answer: 'от 3 до 6 месяцев ',
        id: 3,
      },
      {
        answer: 'более 6 месяцев ',
        id: 4,
      },
    ],
    axis: false,
    correct_answer: [2],
    input_type: 'radio',
    middle: [3],
    over1: [4],
    question: 'На сколько месяцев жизни Вам хватит сделанных накоплений (включая деньги, валюту, банковские вклады, ценные бумаги) в случае потери своих источников дохода:',
  }
];

function DiagnosisTest() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState(0);

  const { question, answers, correct_answer, input_type } = questions[activeQuestion];
  
  const onClickNext = async (e) => {
    if (e.target.innerText === "Завершить") {
      let data = {
        num1: localStorage.getItem('firstTestResult'),
        num2: localStorage.getItem('secondTestResult1'),
        num3: localStorage.getItem('secondTestResult2'),
        token: localStorage.getItem('token'),
      };

      const response = await apiRequest({
        data: data,
        method: 'POST',
        url: '/set-start-test',
      });
  
      // if (response.code === 0 && response.http_status === 200) {
      // } else {
      // }

    } else {
      setSelectedAnswer([]);
      setSelectedAnswerIndex(null);
      if (correct_answer === selectedAnswer) {
        setResult(prev => prev++);
      }
  
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setActiveQuestion(0);
        setShowResult(true);
      }  
    }
  };

  useEffect(() => {
    console.log(selectedAnswer);
  }, [selectedAnswer]); 

  const onAnswerSelected = (answer, e) => {
    if (e.target.checked) {
      input_type === 'checkbox'? setSelectedAnswer((prev) => [...prev, answer]): setSelectedAnswer([answer]);
    } else {
      const filteredAnswers = selectedAnswer.filter(item => item.id !== answer.id);

      input_type === 'checkbox'? setSelectedAnswer(filteredAnswers): setSelectedAnswer([answer]);
    }
    console.log(e.target.checked);
    
  };

  let activeNum = activeQuestion + 1;
  let dynamicWidth = 'calc(100% * ' + activeNum + '/' + questions.length + ')';

  return (
    <div className="quiz-container">
      <h3>Диагностика финансовой эффективности</h3>
      <div className="testingBlock">
        <h3>
          {activeNum}. {question}
        </h3>
        <form className="answers_block">
          {answers.map((answer, index) => (
            <div key={index} className="form_check">
              <input
                key={answer.id}
                className= "firstTestForm"
                id={'inputDefault' + index}
                name='inputDefault'
                type={input_type}
                onChange={(e) => onAnswerSelected(answer, e)}
              />
              <label
                className="form_check_label"
                htmlFor={'inputDefault' + index}
              >
                {answer.answer}
              </label>
            </div>
          ))}
        </form>
        <div className="answers-info">
          {input_type === 'checkbox'
            ? '* - можно выбрать несколько вариантов'
            : ''}
        </div>
        <div className="flex-right">
          <button
            disabled={!selectedAnswer.length}
            onClick={(e) => onClickNext(e)}
          >
            {activeQuestion === questions.length - 1 ? 'Завершить' : 'Дальше'}
          </button>
        </div>
        <div className="progress-bar" id="progress-bar">
          <div
            id="progressBarFull"
            style={{
              width: dynamicWidth,
            }}
          ></div>
        </div>
        <div className="progress-counter">
          <span className="active-question-no">{activeQuestion + 1}</span>
          <span className="total-question">
            &nbsp;из&nbsp;{questions.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisTest;