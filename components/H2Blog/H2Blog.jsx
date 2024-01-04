import React from 'react'
import styles from './H2Blog.module.scss';

export const H2Blog = ({ h2blog }) => {
  return (
    <h2 className={styles.title}>{h2blog}</h2>
  )
}
