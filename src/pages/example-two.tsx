import { Container, Input } from '@components/ui'
import { Layout } from '@components/common'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { BiPhone } from 'react-icons/bi'
import { FiArrowUp } from 'react-icons/fi'
import { useState } from 'react'

export default function ExampleTwo(): JSX.Element {
  const [open, setOpen] = useState(false)

  const variants: Variants = {
    closed: {
      y: '-15%',
    },
    open: {
      y: '-90%',
    },
  }

  const arrow = open
    ? 'text-3xl duration-300'
    : 'text-3xl transform -rotate-180 duration-300'
  const artwork = open ? 'scale-0' : 'scale-1'

  return (
    <Container className="flex justify-center">
      <div
        className={'flex flex-col border shadow-2xl lg:w-1/3 overflow-hidden'}
      >
        <div className={'w-full border-b px-4 py-2 flex items-center'}>
          <div className={'w-2/12 p-2'}>
            <Image src="/icon.svg" height={90} width={90} />
          </div>

          <div className="flex inline items-center ml-auto">
            <BiPhone className={'text-4xl mr-2'} />
            <div>
              <p>Har du brug for hjælp?</p>
              <a className={'font-medium'} href="#">
                Ring til os på 70 10 90 70
              </a>
            </div>
          </div>
        </div>
        <div className={'px-2 md:px-6 mt-24'}>
          <h1 className={'text-4xl font-bold'}>Fortæl os om dig selv</h1>
          <p className={'mt-2 text-lg'}>
            For at kunne tilbyde dig de rette dækninger skal vi vide lidt mere
            om dig. Indtast dit navn og din alder
          </p>
          <Input
            className={'mt-5'}
            name={'fornavn'}
            label={'Fornavn'}
            placeholder={'Jens'}
          />

          <Input
            className={'mt-5'}
            name={'efternavn'}
            label={'Efternavn'}
            placeholder={'Jensen'}
          />

          <Input
            name={'alder'}
            label={'din alder'}
            type={'number'}
            inputMode={'numeric'}
            placeholder={'45'}
            className={'mt-5'}
          />
          <div className={'w-full flex justify-center my-8 gap-5 mb-20'}>
            <button className={'rounded-full border-2 border-black px-5 py-2'}>
              Gå tilbage
            </button>
            <button
              className={
                'rounded-full bg-red-500 px-5 py-2 text-white font-bold'
              }
            >
              Næste →
            </button>
          </div>

          <motion.div
            variants={variants}
            animate={open ? 'open' : 'closed'}
            transition={{ linear: true }}
            initial={'closed'}
            className={'flex flex-col -mb-80 bg-gray-200 px-4 pb-10'}
          >
            <div className={'-mt-12'}>
              <div className={'flex'}>
                <Image src="/Artwork.png" width={188} height={188} />
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
      </div>
    </Container>
  )
}

ExampleTwo.Layout = Layout
