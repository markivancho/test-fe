import React from 'react'

import styles from './styles.module.css'

const ProgressBar = ({ progress = 0 }) => (
  <div className={styles.wrap}>
    <div className={styles.fill} style={{ width: `${progress}%` }} />
  </div>
)

export default ProgressBar
