import { DicesIcon } from '@/components/Icons/DicesIcon'
import { RotateCcwIcon } from '@/components/Icons/RotateCcwIcon'
import { Button } from '@components/UI/button'
import { DICE_STATE, type DiceState, type DiceValue } from '@dtypes/dice'

export default function DiceControls({
  status,
  value,
  onRoll,
  onReset,
}: {
  status: DiceState
  value: DiceValue | null
  onRoll: () => void
  onReset: () => void
}) {
  const DICE_COLORS: Record<DiceValue, string> = {
    1: 'bg-blue-500 hover:bg-blue-600',
    2: 'bg-yellow-500 hover:bg-yellow-600',
    3: 'bg-pink-500 hover:bg-pink-600',
  }
  const buttonColor = DICE_COLORS[value!]

  return (
    <div className="flex flex-col items-center">
      {status !== DICE_STATE.ROLLING && (
        <div className="mt-8 flex gap-16">
          <Button
            onClick={onRoll}
            size="lg"
            className={`${buttonColor} text-white transition-colors`}
            aria-label="Roll the dice"
          >
            <DicesIcon className="size-12" />
          </Button>
          {status === DICE_STATE.RESULT && (
            <Button
              onClick={onReset}
              variant="secondary"
              size="lg"
              aria-label="Reset the dice"
            >
              <RotateCcwIcon className="size-12" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
