import React from 'react'
import { Providers } from '@/redux/Provider'
import useMediaQuery from '@/hooks/useMediaQuery'
import NotLargeEnough from '../notLargeEnough'

import Canvas from '../canvas'
import Toolbar from '../toolbar'

import styles from './graphic-editor.module.css'

type CanvasProps = {
  requiredScreenWidth: number
}

const GraphicEditor = ({ requiredScreenWidth }: CanvasProps) => {
  const isScreenNotLargeEnough = useMediaQuery(requiredScreenWidth)

  if (isScreenNotLargeEnough) {
    return <NotLargeEnough />
  }

  return (
    <Providers>
      <section className={styles.svgCanvas}>
        <Canvas />
        <Toolbar />
      </section>
    </Providers>
  )
}

export default GraphicEditor
