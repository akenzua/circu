'use client'

import useMediaQuery from '../../hooks/useMediaQuery'
import NotLargeEnough from '../notLargeEnough/NotLargeEnough'
import { useSelector, useDispatch } from 'react-redux'
import { setGridColor, toogleGrid, GridState } from '@/redux/slices/gridSlices'

type SvgCanvasProps = {
  requiredScreenWidth: number
}

import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

const SvgCanvas = ({ requiredScreenWidth }: SvgCanvasProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { isSetGrid, gridColor } = useSelector((state: GridState) => state.grid)
  const dispatch = useDispatch()

  const handleChangeGridColor = (e: any) => {
    dispatch(setGridColor(e.target.value))
  }

  const handleShowGrid = () => {
    dispatch(toogleGrid())
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    d3.select(ref.current).selectAll('svg').remove() // Clear previous SVG

    const width = 595 // Width of A4 paper in mm
    const height = 842 // Height of A4 paper in mm
    const gridSize = 20

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    if (isSetGrid) {
      // Draw horizontal and vertical grid lines
      for (let i = 0; i < height; i += gridSize) {
        const strokeWidth = i % (5 * gridSize) === 0 ? '2' : '1' // Make every fifth line bolder
        svg
          .append('line')
          .attr('x1', 0)
          .attr('y1', i)
          .attr('x2', width)
          .attr('y2', i)
          .attr('stroke', gridColor)
          .attr('stroke-width', strokeWidth)
        svg
          .append('line')
          .attr('x1', i)
          .attr('y1', 0)
          .attr('x2', i)
          .attr('y2', height)
          .attr('stroke', gridColor)
          .attr('stroke-width', strokeWidth)
      }
    }
  }, [isSetGrid, gridColor]) // Re-run effect when showGrid or gridColor changes

  const isScreenNotLargeEnough = useMediaQuery(requiredScreenWidth)

  if (isScreenNotLargeEnough) {
    return <NotLargeEnough />
  }

  return (
    <div>
      <button onClick={handleShowGrid}>Toggle Grid</button>
      <label>
        Grid Color:
        <input
          type="color"
          value={gridColor}
          onChange={(e) => handleChangeGridColor(e)}
        />
      </label>
      <div ref={ref}></div>
    </div>
  )
}

export default SvgCanvas
