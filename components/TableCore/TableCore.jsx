import React from 'react'
import styles from './TableCore.module.scss'

export const TableCore = ({ data }) => {
  return (
    <div className={styles.tableCore}>
      <div
        dangerouslySetInnerHTML={{
          __html: data
        }}
      />
    </div>
  )
}
