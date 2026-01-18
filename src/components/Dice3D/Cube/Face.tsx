import { cn } from '@lib/utils'

export function Face({
  children,
  className,
  transform,
}: {
  children?: React.ReactNode
  className: string
  transform: string
}) {
  return (
    <div
      className={cn(
        'absolute flex h-full w-full items-center justify-center text-4xl font-bold backface-hidden',
        'rounded-md border border-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.2)]',
        className
      )}
      style={{ transform }}
    >
      {children}
    </div>
  )
}
