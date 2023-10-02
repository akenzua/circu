import React from 'react'
import dynamic from 'next/dynamic'

type MoldType = React.FC

let Mold: MoldType = () => null

if (process.browser) {
  Mold = dynamic(() => import('mold/mold' as any)) as MoldType
}

export default function Home() {
  return (
    <>
      <header>headering</header>
      <main>
        <Mold />
      </main>
      <footer>footer</footer>
    </>
  )
}
