import React from "react";
import styles from "./CourseBlock.module.scss";
function CourseBlock(props) {
  return (
    <div className={styles.StudyFirst}>
      <h2>{props.courseTitle}</h2>
      <p>{props.courseInfo}</p>
      <div className={styles.lesson_blocks}>
        {props.movie.map((movie) => (
          <div
            className={styles.lesson_block}
            onClick={(e) => {
              e.target.style.display = "none";
            }}
          >
            <div className={styles.iframe_cover}>{props.videoTitle}</div>
            <iframe
              src={props.videoLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseBlock;
