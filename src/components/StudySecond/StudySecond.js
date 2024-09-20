import React from 'react';

import styles from './StudySecond.module.scss';
const videos = [
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 1',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 2',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 3',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 4',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 5',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/LbOve_UZZ54?si=BS29VmHEDVik_zMT',
    title: 'Урок 6',
  },
];

function StudySecond(props) {
  return (
    <div className={styles.StudyFirst}>
      <h2>{props.courseTitle}</h2>
      <p>{props.courseText}</p>
      <div className={styles.lesson_blocks}>
        {videos.map((video) => (
          <div
            className={styles.lesson_block}
            onClick={(e) => {
              e.target.style.display = 'none';
            }}
          >
            <div className={styles.iframe_cover}>{video.title}</div>
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              src={video.iframeLink}
              title="YouTube video player"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudySecond;
