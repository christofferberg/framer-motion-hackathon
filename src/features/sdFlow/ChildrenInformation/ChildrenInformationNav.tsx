import { ArrowLeft, ArrowRight } from '@components/icons'
import { Button, Container } from '@components/ui'
import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { setStep } from 'features/sdFlow/sdFlowSlice'
import { useAppDispatch } from '@app/store'

interface Props {}

const MotionButton = motion.custom(Button)

const ChildrenInformationNav: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Container size="sm">
        <div className="flex items-center space-x-4">
          <MotionButton
            layoutId="sd-button-back"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            variant="sd-outline"
            onClick={() => dispatch(setStep('personal_information'))}
          >
            <ArrowLeft size={30} />
            <span>Gå tilbage</span>
          </MotionButton>

          <MotionButton layoutId="sd-button-next" variant="sd">
            <span>Næste</span>
            <ArrowRight size={30} />
          </MotionButton>
        </div>
      </Container>
    </>
  )
}

export default ChildrenInformationNav
