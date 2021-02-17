import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import sdFlowReducer from '@features/sdFlow/sdFlowSlice'
import uiReducer from '@features/ui/uiSlice'

const rootReducer = combineReducers({
  sdFlow: sdFlowReducer,
  ui: uiReducer,
})

export default rootReducer
