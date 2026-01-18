import { DICE_ACTIONS, type DiceValue } from '@dtypes/dice'
import { memo } from 'react'
import styles from './Result.module.css'

function Result({ value, visible }: ResultDisplayProps) {
  if (!value) return null

  return (
    <div className={`${styles.container} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.wrapper}>
        <div className={styles.bgGlow}></div>

        <div className={styles.content}>
          <div className={styles.text}>{DICE_ACTIONS[value]}</div>

          <div className={styles.glow}>
            <div className={styles.glowBorder}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ResultDisplayProps = {
  value: DiceValue | null
  visible: boolean
}

export default memo(Result)
