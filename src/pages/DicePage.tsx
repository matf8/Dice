import DiceControls from '@components/Controls/Controls'
import Dice3D from '@components/Dice3D/Dice3D'
import Result from '@components/Result/Result'
import { DICE_STATE } from '@dtypes/dice'
import { useDice } from '@hooks/useDice'

export default function DicePage() {
  const dice = useDice()

  return (
    <section className="flex flex-col items-center gap-10">
      <div className="mb-8 flex items-center justify-center">
        <Result value={dice.value} visible={dice.showResult} />
      </div>

      <Dice3D value={dice.value} rolling={dice.status === DICE_STATE.ROLLING} />

      <DiceControls
        status={dice.status}
        value={dice.visibleValue}
        onRoll={dice.roll}
        onReset={dice.reset}
      />
    </section>
  )
}
