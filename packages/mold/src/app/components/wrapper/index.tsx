'use client'

import React from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'
import NotLargeEnough from '../notLargeEnough'

import Canvas from '../canvas'
import Editor from '../editor'

import styles from './wrapper.module.css'

type CanvasProps = {
  requiredScreenWidth: number
}

const Wrapper = ({ requiredScreenWidth }: CanvasProps) => {
  const isScreenNotLargeEnough = useMediaQuery(requiredScreenWidth)

  if (isScreenNotLargeEnough) {
    return <NotLargeEnough />
  }

  return (
    <section className={styles.svgCanvas}>
      <Canvas />
      <Editor />
    </section>
  )
}

export default Wrapper
