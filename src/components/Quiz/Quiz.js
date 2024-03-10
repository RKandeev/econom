import React from "react";
import "./Quiz.scss";
function Quiz(props) {
  return (
    <div className="quiz_block">
      <div className="test_label">Тренировка навыков управления финансами</div>
      <div className="test_block">
        <div className="question_label">Вопрос №1</div>
        <div className="answer_block">
          <div className="form_check">
            <input
              className="form_check_input"
              type="radio"
              name="RadioDefault"
              id="RadioDefault1"
            />
            <label htmlFor="RadioDefault1" className="form_check_label">
              Первый вопрос
            </label>
          </div>
          <div className="form_check">
            <input
              className="form_check_input"
              type="radio"
              name="RadioDefault"
              id="RadioDefault2"
            />
            <label htmlFor="RadioDefault2" className="form_check_label">
              Первый вопрос
            </label>
          </div>
          <div className="form_check">
            <input
              className="form_check_input"
              type="radio"
              name="RadioDefault"
              id="RadioDefault3"
            />
            <label htmlFor="RadioDefault3" className="form_check_label">
              Первый вопрос
            </label>
          </div>
          <div className="next_question_btn">Дальше</div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
