import { Button, Container } from '@components/ui'
import {
  ChildrenInformation,
  PersonalInformation,
  Welcome,
} from '@features/sdFlow'
import {
  decrementStep,
  incrementStep,
  useSdFlow,
} from '@features/sdFlow/sdFlowSlice'
import { Layout } from '@components/common'
import { useAppDispatch } from '@app/store'
import { useCallback } from 'react'

export default function SdFlow(): JSX.Element {
  const { activeStep } = useSdFlow()
  const dispatch = useAppDispatch()

  console.log('activeStep', activeStep)

  const renderStep = useCallback((activeStep: number): JSX.Element => {
    switch (activeStep) {
      case 1:
        return <Welcome />
      case 2:
        return <PersonalInformation />
      case 3:
        return <ChildrenInformation />
      default:
        return <Welcome />
    }
  }, [])

  return (
    <Container>
      <h2>SD Flow</h2>

      {renderStep(activeStep)}

      <div className="mt-20 space-x-4">
        <Button onClick={() => dispatch(decrementStep())}>Previous step</Button>
        <Button onClick={() => dispatch(incrementStep())}>Next step</Button>
      </div>
    </Container>
  )
}

SdFlow.Layout = Layout
