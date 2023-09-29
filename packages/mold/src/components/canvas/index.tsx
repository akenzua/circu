import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

import { useSelector } from 'react-redux'

export interface State {
  grid: { isSetGrid: boolean; gridColor: string }
}

const Canvas = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { isSetGrid, gridColor } = useSelector((state: State) => state.grid)
  useEffect(() => {
    if (!ref.current) {
      return
    }

    d3.select(ref.current).selectAll('svg').remove() // Clear previous SVG

    const width = 595
    const height = 842
    const gridSize = 10

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('data-testid', 'resume-root')

    if (isSetGrid) {
      // Draw horizontal and vertical grid lines
      for (let i = 0; i < height; i += gridSize) {
        const strokeWidth = i % (5 * gridSize) === 0 ? '1.5' : '0.5' // Make every fifth line bolder
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
  }, [isSetGrid, gridColor])

  return <section ref={ref}></section>
}

export default Canvas
