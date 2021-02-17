import clsx from 'clsx'
import s from './SideInfo.module.css'
import { FunctionComponent } from 'react'
import { AnimatePresence, motion, Spring, Variants } from 'framer-motion'
import { useSdFlow } from '@features/sdFlow/sdFlowSlice'
import Image from 'next/image'

interface Props {}

const springShow: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

const variants: Variants = {
  hide: {
    x: '-100%',
    transition: { duration: 0.5 },
  },
  show: {
    x: -10,
    transition: springShow,
  },
}

const imageVariants: Variants = {
  hide: {
    x: '-100%',
    transition: { duration: 0.5 },
  },
  show: {
    x: 0,
    transition: springShow,
  },
}

const SideInfo: FunctionComponent<Props> = () => {
  const rootClassName = clsx(s.root)
  const { activeStep } = useSdFlow()

  const showSideInfo =
    activeStep === 'personal_information' ||
    activeStep === 'children_information'

  return (
    <>
      <motion.div
        className={rootClassName}
        variants={variants}
        initial={'hide'}
        animate={showSideInfo ? 'show' : 'hide'}
      >
        <motion.div
          className="mb-10 2xl:mb-24 mt-auto"
          variants={imageVariants}
        >
          <AnimatePresence initial={false} exitBeforeEnter>
            {activeStep === 'personal_information' && (
              <motion.div
                key={'lady-with-paper'}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: springShow }}
                exit={{
                  opacity: 0,
                  x: -50,
                  transition: { duration: 0.25 },
                }}
              >
                <Image
                  src="/img/damen_der_som_skriver_pa___et_pergament.png"
                  width={550}
                  height={550}
                  layout={'responsive'}
                />
              </motion.div>
            )}

            {activeStep === 'children_information' && (
              <motion.div
                key={'lady-with-baby'}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: springShow }}
                exit={{
                  opacity: 0,
                  x: 50,
                  transition: { duration: 0.25 },
                }}
              >
                <Image
                  src="/img/hende_som_holder_babyen.png"
                  width={550}
                  height={550}
                  layout={'responsive'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="pr-14 w-4/5">
          <h2 className="mb-2 2xl:mb-4 2xl:text-3xl text-xl font-semibold">
            Hvad skal vi bruge informationen til?
          </h2>

          <p className="2xl:text-base text-sm">
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur
            purus sit amet fermentum.
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default SideInfo
