import React from 'react'
import styles from './Button.module.css'

function Button({ text, setIsPopUpFalse }: { text: string; setIsPopUpFalse: () => void }) {
  return (
    <button onClick={() => setIsPopUpFalse()} className={styles.btn}>
      {text}
    </button>
  )
}

export default Button
