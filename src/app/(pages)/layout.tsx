'use client'

import Image from "next/image"
import { ReactNode } from 'react'

import '../globals.css'

import backgroundBubbles from '../images/background-bubbles.svg'
import backgroundLittleBalls from '../images/background-little-balls.svg'
import backgroundDesktopPhoto from '../images/background-about-photo.png'

import { itemsZIndex } from "../constants"
import { usePathname, useRouter } from "next/navigation"

export default function PagesLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
        {children}
        <Image
          className="!hidden 2xl:!flex"
          src={backgroundLittleBalls}
          alt="Background little colored balls"
          style={{
            position: 'absolute',
            top: 100,
            left: 0,
            height: 600,
            width: 'auto',
            zIndex: itemsZIndex.backgroundLittleBalls
          }}
        />
        {pathname === '/about' && <Image
          className="!hidden 2xl:!flex"
          src={backgroundDesktopPhoto}
          alt="description"
          style={{
            position: 'absolute',
            height: 'auto',
            width: 720,
            bottom: 0,
            left: 0,
            zIndex: itemsZIndex.backgroundAboutPhoto,
          }}
        />}
        <Image
          className="!h-[400px] 2xl:!h-[600px]"
          src={backgroundBubbles}
          alt="Background purple bubbles"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 650,
            width: 'auto',
            zIndex: itemsZIndex.backgroundBubbles
          }}
        />
    </>
  )
}
