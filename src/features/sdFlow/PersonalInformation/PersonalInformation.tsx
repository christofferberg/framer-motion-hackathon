import ArrowRight from '@components/icons/ArrowRight'
import clsx from 'clsx'
import s from './PersonalInformation.module.css'
import { Button, Container, Input } from '@components/ui'
import { FunctionComponent } from 'react'
import { incrementStep } from '@features/sdFlow/sdFlowSlice'
import { motion, Spring } from 'framer-motion'
import { useAppDispatch } from '@app/store'

interface Props {
  className?: string
}

const infoSpring: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
}

const PersonalInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const dispatch = useAppDispatch()
  const rootClassName = clsx(s.root, {}, className)

  return (
    <div className={rootClassName}>
      <Container size="sm">
        <div className="max-w-xl">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={infoSpring}
          >
            <div className="mb-4">
              <h2 className="mb-2 text-4xl font-semibold tracking-wide">
                Fortæl om dig selv
              </h2>

              <p className="text-xl leading-snug">
                For at kunne tilbyde dig de rette dækninger skal vi vide lidt
                mere om dig. Indtast dit navn og din alder.
              </p>
            </div>

            <div className="flex space-x-4">
              <Input
                label="Fornavn"
                className="flex-1"
                name="first_name"
                placeholder="F.eks. Jens"
              />

              <Input
                label="Efternavn"
                className="flex-1"
                name="last_name"
                placeholder="F.eks. Jensen"
              />
            </div>
          </motion.div>

          <motion.div layoutId="sd-next-step">
            <Button colorScheme="sd" onClick={() => dispatch(incrementStep())}>
              <span>Næste</span>
              <ArrowRight />
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default PersonalInformation
