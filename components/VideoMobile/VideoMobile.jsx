'use client';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoMobile.module.scss';
import Image from 'next/image';

export const VideoMobile = ({ videoId, posterImage, alt }) => {
  const [showVideo, setShowVideo] = useState(false);

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <div className={styles.videoShort}>
      {!showVideo ? (
        <div className={styles.posterContainer} onClick={() => setShowVideo(true)}>
          {posterImage && (
            <>
              <Image
                src={posterImage}
                alt={alt}
                width={295}
                height={530}
                className={styles.posterImage}
              />
              <button className={styles.playButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="66" viewBox="0 0 58 66" fill="none">
                  <path d="M55.8174 30.4019C57.8174 31.5566 57.8174 34.4434 55.8174 35.5981L4.81738 65.0429C2.81738 66.1976 0.31738 64.7543 0.31738 62.4449L0.317382 3.55514C0.317382 1.24573 2.81738 -0.197644 4.81738 0.957056L55.8174 30.4019Z" fill="#FFA800" />
                </svg>
              </button>
            </>
          )}
        </div>
      ) : (
        { videoId } && (
          <div className={styles.videoWrapper}>
            <YouTube
              videoId={videoId}
              opts={{
                width: '295',
                height: '530',
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={onReady}
            />
          </div>
        )
      )}
    </div>
  );
};
