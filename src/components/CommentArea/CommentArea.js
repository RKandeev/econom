import React, { useState } from "react";
import styles from "./CommentArea.module.scss";

function CommentArea(props) {
  const MAX_TEXT_LENGTH = 280;
  const [text, setText] = useState("");
  function handleTextAreaChange(event) {
    const value = event.target.value;
    if (value.length <= MAX_TEXT_LENGTH) {
      setText(value);
    }
  }
  return (
    <div
      className={styles.CommentArea}
      style={{ height: `${props.commentHeight}` }}
    >
      <h4>Комментарий</h4>
      <textarea
        onChange={handleTextAreaChange}
        value={text}
        placeholder={props.placeHolderTitle}
      ></textarea>
      <div
        className={styles.counter}
      >{`${text.length}/${MAX_TEXT_LENGTH}`}</div>
    </div>
  );
}

export default CommentArea;
