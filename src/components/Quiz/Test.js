import React from 'react';

import SensorChart from '../SensorChart/SensorChart';

import './Quiz.scss';
const quiz = {
  level: 'Beginner',
  perQuestionScore: 5,
  // in seconds
  questions: [
    {
      choices: [
        'сравню ставки по кредитам и выберу тот, по которому ставка выше',
        'сравню ежемесячный платеж по кредитам и выберу тот, по которому он выше',
        'выполню пункты указанные выше',
        'брошу монетку 😊',
        'ни один из вариантов не поможет найти оптимальное решение',
      ],
      correctAnswer: [
        'сравню ставки по кредитам и выберу тот, по которому ставка выше',
        'сравню ежемесячный платеж по кредитам и выберу тот, по которому он выше',
      ],
      inputType: 'checkbox',
      question:
        'В ситуации, когда у Вас есть два или более незакрытых кредитов, как Вы выберете кредит, который выгоднее погашать досрочно в первую очередь? ',
    },
    {
      choices: ['var', 'let', 'var and let', 'None of the above'],
      correctAnswer: ['var and let'],
      inputType: 'checkbox',
      question:
        'Which of the following keywords is used to define a variable in Javascript?',
    },
    {
      choices: [
        'document.write()',
        'console.log()',
        'window.alert',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
      inputType: 'radio',
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
    },
    {
      choices: ['const', 'var', 'let', 'constant'],
      correctAnswer: 'const',
      inputType: 'radio',
      question: 'How can a datatype be declared to be a constant type?',
    },
  ],
  
  topic: 'Javascript',
  
  totalQuestions: 10, 
  totalTime: 60,
};

const Test = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [result, setResult] = React.useState({
    correctAnswers: 0,
    score: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, inputType } =
    questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswer([]);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          correctAnswers: prev.correctAnswers + 1,
          score: prev.score + 5,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  // let checking = [];
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(selectedAnswer.push(answer));
    console.log(selectedAnswer);

    // if (selectedAnswer.length === correctAnswer.length) {
    //   for (let k = 0; k < selectedAnswer.length; k--) {
    //     for (let i = 0; i < selectedAnswer.length; i++) {
    //       for (let j = 0; j < correctAnswer.length; j++) {
    //         if (selectedAnswer[i] === correctAnswer[j]) {
    //           checking = checking.push(selectedAnswer[i]);
    //         } else {
    //           console.log("хуйня какая то");
    //         }
    //       }
    //     }
    //     if (correctAnswer.toString() === checking.toString()) {
    //       console.log("заебись");
    //     }
    //   }
    //   console.log("Проверяю");
    // } else {
    //   console.log("херня");
    // }
  };

  // const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  let activeNum = activeQuestion + 1;
  let dynamicWidth = 'calc(100% * ' + activeNum + '/' + questions.length + ')';

  return (
    <div className="quiz-container">
      <h2>Тренировка навыков управления финансами</h2>
      {!showResult ? (
        <div className="testingBlock">
          <h3>
            {activeNum}. {question}
          </h3>
          <form className="answers_block">
            {choices.map((answer, index) => (
              <div className="form_check">
                <input
                  key={answer}
                  data-number={index}
                  id={'inputDefault' + index}
                  name="inputDefault"
                  type={inputType}
                  className={
                    selectedAnswerIndex === index
                      ? 'selected-answer firstTestForm'
                      : 'firstTestForm'
                  }
                  onChange={() => onAnswerSelected(answer, index)}
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
            {inputType === 'checkbox'
              ? '* - можно выбрать несколько вариантов'
              : ''}
          </div>
          <div className="flex-right">
            <button
              disabled={selectedAnswerIndex === null}
              onClick={onClickNext}
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
      ) : (
        <div className="result">
          <SensorChart />
        </div>
      )}
    </div>
  );
};

export default Test;
