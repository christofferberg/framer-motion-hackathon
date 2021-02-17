import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useTypedSelector } from '@app/store/store'

type SdFlowSteps = 'welcome' | 'personal_information' | 'children_information'

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
    incrementStep: (state) => {
      if (state.activeStep < 3) {
        state.activeStep++
      }
    },
    decrementStep: (state) => {
      if (state.activeStep !== 1) {
        state.activeStep--
      }
    },
  },
})

// Actions
export const { setStep, incrementStep, decrementStep } = sdFlow.actions

// Selector hooks
export const useSdFlow = (): SDFlowState => {
  return useTypedSelector((state) => state.sdFlow)
}

export default sdFlow.reducer
