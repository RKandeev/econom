import React, { useContext, useEffect, useRef, useState } from 'react';

import toast from 'react-hot-toast';

import { apiRequest } from '../../api';
import { Context } from '../../Context';

import '../Quiz/Quiz.scss';

const questions = [
  {
    answers: [
      {
        answer: 'сравню ставки по кредитам и выберу тот, по которому ставка выше',
        id: 1,
      },
      {
        answer: 'сравню ежемесячный платеж по кредитам и выберу тот, по которому он выше',
        id: 2,
      },
      {
        answer: 'выполню пункты указанные выше',
        id: 3,
      },
      {
        answer: 'брошу монетку 😊',
        id: 4,
      },
      {
        answer: 'ни один из вариантов не поможет найти оптимальное решение',
        id: 5,
      },
    ],
    correct_answer: [5],
    input_type: 'radio',
    question: 'В ситуации, когда у Вас есть два или более незакрытых кредитов, как Вы выберете кредит, который выгоднее погашать досрочно в первую очередь? ',
  },
  {
    answers: [
      { answer: "стоимость жилья и величину первоначального взноса", id: 1 },
      { answer: "ставку и срок ипотеки", id: 2 },
      { answer: "стоимость аренды покупаемого жилья", id: 3 },
      { answer: "инфляцию", id: 4 },
      { answer: "доходность инвестиций", id: 5 }
    ],
    correct_answer: [1, 2, 3, 4, 5],
    input_type: "checkbox",
    question: "При принятии решения о покупке жилья и ипотеке Вы считаете важным учитывать?"
  },
  {
    answers: [
      { answer: "сумму и ставку кредита", id: 1 },
      { answer: "величину ежемесячного платежа", id: 2 },
      { answer: "доходность инвестиций", id: 3 },
      { answer: "инфляцию", id: 4 },
      { answer: "расходы на страховку (по кредиту)", id: 5 }
    ],
    correct_answer: [1, 3, 4, 5],
    input_type: "checkbox",
    question: "При принятии решения о том, стоит ли досрочно погашать кредит, Вы считаете важным учитывать?"
  },
  {
    answers: [
      { answer: "сравню ежемесячные платежи по кредитам до и после рефинансирования", id: 1 },
      { answer: "сравню ставку до действующему кредитам и ставку, которая будет установлена при рефинансировании", id: 2 },
      { answer: "сравню сумму уплаченных процентов за весь период кредитования в двух вариантах (с рефинансированием и без него)", id: 3 },
      { answer: "сравню сумму процентов, которую вы уплатите с момента рефинансирования, с суммой оставшихся к уплате процентов по действующим кредитам", id: 4 },
      { answer: "нет верного варианта", id: 5 }
    ],
    correct_answer: [4],
    input_type: "radio",
    question: "Как Вы определите, выгодно ли Вам рефинансировать свои кредиты?"
  },
  {
    answers: [
      { answer: "проценты по кредиту", id: 1 },
      { answer: "расходы на страхование", id: 2 },
      { answer: "ликвидность и износ автомобиля (% потери его стоимости со временем)", id: 3 },
      { answer: "расход на содержание автомобиля", id: 4 },
      { answer: "транспортные расходы, которые вы несёте, не имея автомобиля", id: 5 },
      { answer: "доходность инвестиций", id: 6 }
    ],
    correct_answer: [1, 2, 3, 4, 6],
    input_type: "checkbox",
    question: "Вы планируете покупку автомобиля в кредит и хотите оценить влияние этого решения на своё финансовое состояние. Какие факторы Вы считаете необходимым при этом учитывать?"
  },
  {
    answers: [
      { answer: "вариант 1", id: 1 },
      { answer: "вариант 2", id: 2 },
      { answer: "примерно одинаково", id: 3 }
    ],
    correct_answer: [2],
    input_type: "radio",
    question: "У Вас есть 1 млн. руб., и Вам нужно решать «жилищный вопрос». Вы можете выбрать один из двух вариантов:" +
        "<br/> <br/> &emsp; <i>Вариант</i> 1: Внести его как первоначальный взнос, купить квартиру за 6 млн. руб. в ипотеку на 20 лет со ставкой 10% и страховкой кредита 1% в год." +
        "<br/> &emsp; <i>Вариант</i> 2: Арендовать эту квартиру за 20 тыс. руб. в месяц, а имеющийся 1 млн. руб. вложить под 10% годовых." +
        "<br/> <br/> Какой вариант является более выгодным, если ежегодный рост стоимости покупаемой квартиры равен росту арендной платы и годовой инфляции и составляет 6%?"
  },
  {
    answers: [
      { answer: "досрочное погашение кредита", id: 1 },
      { answer: "инвестирование свободных денег и погашение кредита по графику", id: 2 },
      { answer: "примерно одинаково", id: 3 }
    ],
    correct_answer: [2],
    input_type: "radio",
    question: "Год назад Вы взяли кредит 300 тыс. руб. сроком на 3 года со ставкой 18% годовых, в течение года платежи вносились по графику. Сегодня у Вас появилась возможность сделать досрочное погашение по этому кредиту на 200 тыс. руб. Вы также можете вложить эти деньги под 12% годовых. Что будет выгоднее?"
  },
  {
    answers: [
      {
        answer: "автокредит",
        id: 1
      },
      {
        answer: "ипотека",
        id: 2
      },
      {
        answer: "примерно одинаково",
        id: 3
      },
    ],
    correct_answer: [2],
    input_type: "radio",
    question: "На сегодняшний день у Вас есть два кредита:<br><br>" +
        "&emsp;1) Автокредит, взят 2 года назад на срок 5 лет, со ставкой 14% годовых и обязательством ежегодного страхования автомобиля (стоимость страховки – 4% от долга по кредиту)<br>" +
        "&emsp;2) Ипотека, взята 7 лет назад на срок 15 лет, со ставкой 9% годовых и обязательством ежегодного страхования квартиры (стоимость страховки – 0,7% от долга по кредиту)<br><br>" +
        "Какой из кредитов Вам сегодня выгоднее погашать досрочно, если ежегодная инфляция составляет 7%?",
  },
  {
    answers: [
      {
        answer: "отказаться от рефинансирования",
        id: 1
      },
      {
        answer: "провести рефинансирование",
        id: 2
      },
      {
        answer: "разницы нет (очень несущественна)",
        id: 3
      },
    ],
    correct_answer: [1],
    input_type: "radio",
    question: "У Вас есть кредит на сумму 500 тыс. руб. по ставке 19% годовых, взятый 2 года назад на срок 3,5 года, платежи по кредиту вносились строго по графику. <br/>Сегодня Вам предложили "+
      "рефинансирование этого кредита с новыми условиями – ставкой 9% годовых и сроком 3 года, с разовой уплатой страховки в 7 тыс. руб.<br>" +
        "Что для Вас было бы выгоднее?",
  },
  {
    answers: [
      {
        answer: "получу выгоду более 200 тыс. руб",
        id: 1
      },
      {
        answer: "получу выгоду более 100 тыс. руб.",
        id: 2
      },
      {
        answer: "не будет ни выгод, ни потерь ",
        id: 3
      },
      {
        answer: "понесу потери менее 100 тыс. руб.",
        id: 4
      },
      {
        answer: "понесу потери от 100 до 200 тыс. руб.",
        id: 5
      },
      {
        answer: "понесу потери более 200 тыс. руб.",
        id: 6
      },
    ],
    correct_answer: [6],
    input_type: "radio",
    question: "Вы планируете покупку автомобиля за 1 600 тыс. руб., сделав первоначальный взнос в 500 тыс. руб. и взяв оставшуюся сумму в кредит под 14% годовых на 5 лет с" +
    "обязательством ежегодного страхования автомобиля (за 5% от остатка долга по кредиту). <br/>Вы знаете, что владение автомобилем также потребует ежемесячных расходов на его содержание в" +
    "сумме 12 тыс. руб. и ежегодных расходов 45 тыс. руб. (транспортный налог, ОСАГО, тех. обслуживание). При этом сейчас Ваши ежемесячные расходы на транспорт составляют 15 тыс. руб.<br><br>" +
        "В то же время, Вы предполагаете, что даже с учетом износа, Ваш автомобиль будет расти в цене на 10% в год, поскольку это востребованная марка.<br><br>" +
        "Оцените свои финансовые последствия от покупки автомобиля, если принять во внимание, что Вы можете получать инвестиционный доход со своих средств в 10% годовых, а годовая" +
          "инфляция не превышает 7%?",
  },
];

function EstimateTest({setActiveStarttestTabIndex}) {
  const {setStartTestResults } = useContext(Context);
  const inputRefs = useRef([]);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [result, setResult] = useState(0);

  const {
    question,
    answers,
    correct_answer,
    input_type
  } = questions[activeQuestion];

  const onClickNext = async (e) => {
    if (e.target.innerText === "ЗАВЕРШИТЬ") {
      let data = {
        num1: result,
        token: localStorage.getItem('token'),
      };

      const response = await apiRequest({
        data: data,
        method: 'POST',
        url: '/set-start-test',
      });

      if (response.code === 0 && response.http_status === 200) {
        setStartTestResults((prev) => ({...prev, num1: result}));
        setActiveStarttestTabIndex();
      } else {
        toast.error(response.mes);
      }

    } else {

      const allNumbersExist = correct_answer.every(num => selectedAnswer.includes(num));

      if (allNumbersExist) {
        setResult((prev) => prev + 1);
      }

      setSelectedAnswer([]);
      setActiveQuestion((prev) => prev + 1);
    }
  };

  useEffect(() => {
    inputRefs.current.map((el) => {
      if (el) el.checked = false;
    });
  }, [question]);

  const onAnswerSelected = (answer, e) => {
    if (e.target.checked) {
      input_type === 'checkbox'? setSelectedAnswer((prev) => [...prev, answer.id]): setSelectedAnswer([answer.id]);
    } else {
      const filteredAnswers = selectedAnswer.filter(item => item.id !== answer.id);

      input_type === 'checkbox'? setSelectedAnswer(filteredAnswers): setSelectedAnswer([answer.id]);
    }
  };

  let activeNum = activeQuestion + 1;
  let dynamicWidth = 'calc(100% * ' + activeNum + '/' + questions.length + ')';

  return (
    <div className="quiz-container">
      <div className="testingBlock">
        <div className="progress-counter">
          <span className="active-question-no">{activeQuestion + 1}</span>
          <span className="total-question">
            &nbsp;из&nbsp;{questions.length}
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
        <h3 className="mt-4rem" dangerouslySetInnerHTML={{ __html: question }}></h3>
        <form className="answers_block">
          {answers.map((answer, index) => (
            <div key={index} className="form_check">
              <input
                key={answer.id}
                ref={el => inputRefs.current[index] = el}
                className="firstTestForm"
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
      </div>
    </div>
  );
}

export default EstimateTest;

