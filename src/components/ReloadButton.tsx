'use client'

import React from 'react'
import styles from '../styles/utils.module.css'

interface ReloadButtonProps {
  content: string
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ content }) => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className={styles.centerContainer}>
      <button className={styles.button} onClick={handleReload}>
        {content}
      </button>
    </div>
  )
}

export default ReloadButton
