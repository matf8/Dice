import { memo, useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const coordsRef = useRef({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    setIsTouchDevice(isTouch)

    if (isTouch) return

    const cursor = cursorRef.current
    if (!cursor) return

    let animationId: number

    const onMouseMove = (e: MouseEvent) => {
      coordsRef.current.x = e.clientX
      coordsRef.current.y = e.clientY
    }

    const animate = () => {
      const { x, y } = coordsRef.current
      cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`
      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    animationId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  if (isTouchDevice) return null

  return <div ref={cursorRef} className={styles.cursor} />
}

export default memo(CustomCursor)
