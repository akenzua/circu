'use client'

import useMediaQuery from '@/app/hooks/useMediaQuery'
import styles from './SvgCanvas.module.css'
import NotLargeEnough from './sub-components/notLargeEnough/NotLargeEnough'

type SvgCanvasProps = {
  requiredScreenWidth: number
}

const SvgCanvas = ({ requiredScreenWidth }: SvgCanvasProps) => {
  // move this logic up the tree later on
  // when you start working on other
  // components or the redux provider created

  const isScreenNotLargeEnough = useMediaQuery(requiredScreenWidth)

  if (isScreenNotLargeEnough) return <NotLargeEnough />

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svgCanvas}
      data-testid="resume-root"
    ></svg>
  )
}

export default SvgCanvas
