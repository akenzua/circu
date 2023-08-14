import React from 'react'
import styles from './page.module.css'
import Wrapper from './components/wrapper'

// import Wrapper from './components/canvas'

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper requiredScreenWidth={595} />
    </main>
  )
}
