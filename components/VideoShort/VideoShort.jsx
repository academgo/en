import React from 'react'
import styles from './VideoShort.module.scss';

export const VideoShort = ({ videoUrl }) => {
  return (
    <div className={styles.VideoShort}>
      <iframe
        width="295"
        height="530"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        frameBorder="0"
        allowFullScreen
        className={styles.iframe}
      />
    </div>
  )
}
