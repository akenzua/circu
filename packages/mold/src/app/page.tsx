import Image from 'next/image'
import styles from './page.module.css'
import Wrapper from './components/wrapper'
import Editor from './components/editor'
import GridControls from './components/grid-controls'
// import Wrapper from './components/canvas'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Wrapper /> */}
      {/* <GridControls /> */}
      <Wrapper requiredScreenWidth={595} />
    </main>
  )
}
