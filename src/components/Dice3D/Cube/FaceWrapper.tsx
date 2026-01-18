export function FaceWrapper({ children, transform }: Props) {
  return (
    <div className="transform-style-3d absolute h-full w-full" style={{ transform }}>
      {children}
    </div>
  )
}

type Props = {
  transform: string
  children: React.ReactNode
}
