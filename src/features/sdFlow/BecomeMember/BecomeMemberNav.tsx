import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { Button, Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import { useAppDispatch } from '@app/store'
import { setStep } from 'features/sdFlow/sdFlowSlice'

interface Props {}

const MotionButton = motion.custom(Button)

const BecomeMemberNav: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Container size="md">
        <div className="flex flex-col items-center space-y-4">
          <MotionButton
            layoutId="sd-button-next"
            variant="sd"
            onClick={() => dispatch(setStep('personal_information'))}
          >
            <span>Gå i gang</span>
            <ArrowRight size={30} />
          </MotionButton>

          <button>Gå til kladde</button>
        </div>
      </Container>
    </>
  )
}

export default BecomeMemberNav
