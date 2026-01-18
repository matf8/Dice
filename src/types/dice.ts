export type DiceValue = 1 | 2 | 3

export const DICE_STATE = {
  IDLE: 'idle',
  ROLLING: 'rolling',
  RESULT: 'result',
} as const

export type DiceState = (typeof DICE_STATE)[keyof typeof DICE_STATE]

export const FACE_DEPTH = 6

export type DiceProps = {
  value: DiceValue | null
  isRolling: boolean
}

export interface Dice3DProps {
  value: DiceValue | null
  rolling: boolean
}

export const DICE_ACTIONS: Record<DiceValue, string> = {
  1: 'Jugarrr!',
  2: 'Cocinarrr!',
  3: 'Ejerciciooo!',
}
