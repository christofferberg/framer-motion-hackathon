import clsx from 'clsx'
import { FunctionComponent } from 'react'
import s from './Welcome.module.css'
import Line from '@components/icons/Line'
import ArrowRight from '@components/icons/ArrowRight'
import { motion } from 'framer-motion'

interface Props {
  className?: string
}

const Welcome: FunctionComponent<Props> = ({ className }): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <motion.div exit={{ opacity: 0 }} className={rootClassName}>
      <h1 className="text-4xl font-bold leading-tight">Bliv medlem i dag?</h1>
      <p className="text-base leading-tight">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non
        metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor.
      </p>
      <h2 className="text-sm leading-tight">I flowet skal du følgende</h2>
      <div className="relative">
        <div className="absolute inset-0">
          <Line className="w-full h-full"></Line>
        </div>
        <div className="grid grid-cols-3">
          <figure className="flex flex-col">
            <img src="/img/umbrella.png" alt="umbrella" />
            <figcaption>
              Vælge hvordan du og dine børn ønsker at blive dækket
            </figcaption>
          </figure>
          <figure className="flex flex-col">
            <img src="/img/phone.png" alt="phone" />
            <figcaption>Personlige oplysninger</figcaption>
          </figure>
          <figure className="flex flex-col">
            <img src="/img/medical.png" alt="medical" />
            <figcaption>Helbredsoplysninger</figcaption>
          </figure>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="">
          <span>Gå i gang</span>
          <ArrowRight></ArrowRight>
        </button>
      </div>
    </motion.div>
  )
}

export default Welcome
