import React from 'react'
import styles from './TableCore.module.scss'

export const TableCore = ({ data }) => {
  console.log("data", data)
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
