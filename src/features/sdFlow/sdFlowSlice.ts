import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useTypedSelector } from '@app/store/store'

export type SdFlowSteps =
  | 'become_member'
  | 'personal_information'
  | 'children_information'

interface SDFlowState {
  activeStep: SdFlowSteps
}

const initialState: SDFlowState = {
  activeStep: 'become_member',
}

const sdFlow = createSlice({
  name: 'sdFlow',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<SdFlowSteps>) => {
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
