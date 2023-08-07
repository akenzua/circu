import Image from 'next/image'
import styles from './page.module.css'
import SvgCanvas from './components/svg-canvas/SvgCanvas'
import React from 'react'

export default function Home() {
  return (
    <main className={styles.main}>
      <SvgCanvas requiredScreenWidth={595} />
    </main>
  )
}
