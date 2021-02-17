import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useTypedSelector } from '@app/store/store'

interface SDFlowState {
  activeStep: number
}

const initialState: SDFlowState = {
  activeStep: 1,
}

const sdFlow = createSlice({
  name: 'sdFlow',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload
    },
  },
})

// Actions
export const { setStep } = sdFlow.actions

// Selector hooks
export const useSdFlow = (): SDFlowState => {
  return useTypedSelector((state) => state.sdFlow)
}

export default sdFlow.reducer
