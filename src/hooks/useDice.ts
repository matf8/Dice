import { DICE_STATE, type DiceState, type DiceValue } from '@dtypes/dice'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useDice() {
  const [status, setStatus] = useState<DiceState>(DICE_STATE.IDLE)
  const [value, setValue] = useState<DiceValue | null>(null)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)
  const lastVisibleRef = useRef<DiceValue>(1)
  const ROLL_DURATION = 2000

  const getNextValue = useCallback((): DiceValue => {
    const options: DiceValue[] = [1, 2, 3]
    const current = value || lastVisibleRef.current
    if (current) {
      return options.filter((v) => v !== current)[Math.floor(Math.random() * 2)]
    }
    return options[Math.floor(Math.random() * 3)]
  }, [value])

  const roll = useCallback(() => {
    if (status === DICE_STATE.ROLLING) return

    const nextValue = getNextValue()

    setStatus(DICE_STATE.ROLLING)
    setProgress(0)
    startRef.current = performance.now()

    const tick = (time: number) => {
      const elapsed = time - startRef.current
      const p = Math.min(elapsed / ROLL_DURATION, 1)

      setProgress(p)

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(nextValue)
        lastVisibleRef.current = nextValue
        setStatus(DICE_STATE.RESULT)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [getNextValue, status])

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null

    setStatus(DICE_STATE.IDLE)
    setValue(null)
    setProgress(0)
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return {
    status,
    value,
    visibleValue: value || lastVisibleRef.current,
    progress,
    roll,
    reset,
    showResult: status === DICE_STATE.RESULT,
  }
}
