/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import { useState } from 'react'

const ImageHover = ({
  src,
  hoverSrc,
  alt,
}: {
  src: string
  hoverSrc: string
  alt: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  let hoverTimeout: any
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setIsHovered(true), 1000) // 1 second delay
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHovered(false)
  }

  return (
    <div
      className='relative aspect-square bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] dark:from-[#1a1f2e] dark:to-[#2d3748] rounded-lg p-4 overflow-hidden group-hover:border-2 group-hover:border-primary transition-all duration-300'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw'
        className='object-contain transition-opacity duration-300'
        style={{ opacity: isHovered ? 0 : 1 }}
        loading='lazy'
      />
      <Image
        src={hoverSrc}
        alt={`${alt} - alternate view`}
        fill
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw'
        className='object-contain transition-opacity duration-300'
        style={{ opacity: isHovered ? 1 : 0 }}
        loading='lazy'
      />
    </div>
  )
}

export default ImageHover