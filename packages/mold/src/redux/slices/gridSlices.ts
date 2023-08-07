import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GridState {
  isSetGrid: boolean
  gridColor: string
}

const initialState: GridState = {
  isSetGrid: true,
  gridColor: '#ccc ',
}

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    toogleGrid: (state) => {
      state.isSetGrid = !state.isSetGrid
    },
    setGridColor: (state, action: PayloadAction<string>) => {
      state.gridColor = action.payload
    },
  },
})

export const { toogleGrid, setGridColor } = gridSlice.actions
export default gridSlice.reducer
