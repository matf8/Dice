import { type DiceValue, DICE_ACTIONS } from '@dtypes/dice'

type Props = {
  history: DiceValue[]
}

export default function History({ history }: Props) {
  if (history.length === 0) return null

  return (
    <div className="mt-12 w-full max-w-sm">
      <h2 className="text-muted-foreground mb-2 text-center text-sm font-semibold text-white">
        Historial
      </h2>
      <ul className="space-y-2">
        {history.map((value, index) => (
          <li
            key={index}
            className="bg-background rounded-md border px-3 py-2 text-center text-sm font-medium"
          >
            {DICE_ACTIONS[value]}
          </li>
        ))}
      </ul>
    </div>
  )
}
