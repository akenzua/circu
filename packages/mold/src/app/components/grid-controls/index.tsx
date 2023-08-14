'use-client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setGridColor, toogleGrid } from '@/redux/slices/gridSlices'

export interface State {
  grid: { isSetGrid: boolean; gridColor: string }
}
const GridControls = () => {
  const { gridColor, isSetGrid } = useSelector((state: State) => state.grid)
  const dispatch = useDispatch()

  const handleChangeGridColor = (e: any) => {
    dispatch(setGridColor(e.target.value))
  }

  const handleShowGrid = () => {
    dispatch(toogleGrid())
  }
  return (
    <>
      <button onClick={handleShowGrid}>Toggle Grid</button>
      {isSetGrid && (
        <label>
          Grid Color:
          <input
            type="color"
            value={gridColor}
            onChange={(e) => handleChangeGridColor(e)}
          />
        </label>
      )}
    </>
  )
}

export default GridControls
