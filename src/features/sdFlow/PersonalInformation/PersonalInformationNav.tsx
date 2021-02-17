import React, { FunctionComponent } from 'react'
import { ArrowLeft, ArrowRight } from '@components/icons'
import { Button, Container } from '@components/ui'
import { motion } from 'framer-motion'
import { setStep } from 'features/sdFlow/sdFlowSlice'
import { useAppDispatch } from '@app/store'

interface Props {}

const MotionButton = motion.custom(Button)

const PersonalInformationNav: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Container size="md">
        <div className="flex items-center space-x-4">
          <MotionButton
            layoutId="sd-button-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            variant="sd-outline"
            onClick={() => dispatch(setStep('become_member'))}
          >
            <ArrowLeft size={30} />
            <span>Gå tilbage</span>
          </MotionButton>

          <MotionButton
            layoutId="sd-button-next"
            variant="sd"
            onClick={() => dispatch(setStep('children_information'))}
          >
            <span>Næste</span>
            <ArrowRight size={30} />
          </MotionButton>
        </div>
      </Container>
    </>
  )
}

export default PersonalInformationNav
