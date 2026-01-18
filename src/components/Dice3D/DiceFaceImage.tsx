import { memo } from 'react'

interface DiceFaceImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

function DiceFaceImage({ src, alt }: DiceFaceImageProps) {
  const base = src.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '')
  return (
    <picture>
      <source srcSet={`${base}@200.webp 1x, ${base}@400.webp 2x`} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width="auto"
        height="auto"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  )
}

export default memo(DiceFaceImage)
