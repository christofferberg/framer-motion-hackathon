import { Container, Input } from '@components/ui'
import { Layout } from '@components/common'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { FiArrowUp } from 'react-icons/fi'
import { useState } from 'react'
import DrawerHeader from '@features/sdDrawer/DrawerHeader'
import DrawerBody from '@features/sdDrawer/DrawerBody'

export default function SdDrawerForm(): JSX.Element {
  const [open, setOpen] = useState(false)

  //Variants of the drawer-box toggled between
  const variants: Variants = {
    closed: {
      y: '-15%',
    },
    open: {
      y: '-90%',
    },
  }

  //toggle for spinning the drawer-box arrow, when open is toggled
  const arrow = open
    ? 'text-3xl duration-300'
    : 'text-3xl transform -rotate-180 duration-300'

  return (
    <Container className="flex justify-center">
      <div
        className={'flex flex-col border shadow-2xl lg:w-1/3 overflow-hidden'}
      >
        {/* Header */}
        <DrawerHeader />

        {/* Body */}
        <DrawerBody />

        {/* Animated card */}
        <motion.div
          variants={variants}
          animate={open ? 'open' : 'closed'}
          transition={{ linear: true }}
          initial={'closed'}
          className={'flex flex-col -mb-80 bg-gray-200 px-4 pb-10 mx-4'}
        >
          <div className={'-mt-12'}>
            <div className={'flex'}>
              <Image
                src="/img/damen_der_som_skriver_pa___et_pergament.png"
                width={188}
                height={188}
              />
              <div className={'flex ml-auto'}>
                <button onClick={() => setOpen(!open)}>
                  <FiArrowUp className={arrow} />
                </button>
              </div>
            </div>
          </div>
          <h1 className={'text-xl w-2/3'}>
            Hvad skal vi bruge informationen til?
          </h1>
          <p className={'mt-3'}>
            I danmark får du mere end 350 forskellige tilskud. Det betyder, at
            du fx kan få tilskud til tandlæge, briller, medicin, fysioterapi,
            kiropraktik, psykolog, diætist og jordemoder.{' '}
          </p>
        </motion.div>
      </div>
    </Container>
  )
}

SdDrawerForm.Layout = Layout
