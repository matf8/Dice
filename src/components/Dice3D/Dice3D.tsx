import type { Dice3DProps, DiceValue } from '@dtypes/dice'
import { memo, useEffect, useRef, useState } from 'react'
import { Face } from './Cube/Face'
import DiceFaceImage from './DiceFaceImage'

const BASE = import.meta.env.BASE_URL || '/'
const IMG = {
  GAME: `${BASE}images/juego.png`,
  COOK: `${BASE}images/cocina.png`,
  EXERCISE: `${BASE}images/deporte.png`,
} as const

function Dice3D({ value, rolling }: Dice3DProps) {
  const FACE_ROTATION: Record<DiceValue, { x: number; y: number }> = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: -90 },
    3: { x: 0, y: 180 },
  }
  const [transform, setTransform] = useState('rotateY(0deg)')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!rolling) return

    let start = performance.now()

    const spin = (time: number) => {
      const elapsed = time - start
      const baseRotation = elapsed * 0.6

      const tilt = Math.sin(elapsed / 200) * 12

      setTransform(`rotateX(${tilt + baseRotation * 0.3}deg) rotateY(${baseRotation}deg)`)

      rafRef.current = requestAnimationFrame(spin)
    }

    rafRef.current = requestAnimationFrame(spin)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [rolling])

  useEffect(() => {
    if (rolling || !value) return

    const { x, y } = FACE_ROTATION[value]

    setTransform(`rotateX(${x + 6}deg) rotateY(${y + 18}deg) translateY(6px)`)

    const bounce = setTimeout(() => {
      setTransform(`rotateX(${x - 3}deg) rotateY(${y - 4}deg) translateY(-3px)`)
    }, 140)

    const settle = setTimeout(() => {
      setTransform(`rotateX(${x}deg) rotateY(${y}deg) translateY(0px)`)
    }, 280)

    return () => {
      clearTimeout(bounce)
      clearTimeout(settle)
    }
  }, [rolling, value])

  return (
    <div className="perspective-1000 h-80 w-80">
      <div
        className="transform-style-3d relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1.2,.36,1)]"
        style={{ transform }}
      >
        <Face transform="rotateY(0deg) translateZ(160px)" className="bg-blue-500">
          <DiceFaceImage src={IMG.GAME} alt="Game" />
        </Face>

        <Face transform="rotateY(90deg) translateZ(160px)" className="bg-yellow-500">
          <DiceFaceImage src={IMG.COOK} alt="Cook" />
        </Face>

        <Face transform="rotateY(180deg) translateZ(160px)" className="bg-pink-500">
          <DiceFaceImage src={IMG.EXERCISE} alt="Exercise" />
        </Face>

        <Face transform="rotateY(-90deg) translateZ(160px)" className="bg-yellow-500">
          <DiceFaceImage src={IMG.COOK} alt="Cook" />
        </Face>

        <Face transform="rotateX(90deg) translateZ(160px)" className="bg-blue-500">
          <DiceFaceImage src={IMG.GAME} alt="Game" />
        </Face>

        <Face transform="rotateX(-90deg) translateZ(160px)" className="bg-pink-500">
          <DiceFaceImage src={IMG.EXERCISE} alt="Exercise" />
        </Face>
      </div>
    </div>
  )
}

export default memo(Dice3D)
