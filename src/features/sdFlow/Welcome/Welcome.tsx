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
      <div className="mx-auto max-w-3xl space-y-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Bliv medlem i dag
          </h1>

          <p className="text-base leading-tight">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
            nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            I flowet skal du følgende
          </h2>

          <div className="relative">
            <div className="absolute inset-0 px-28 transform -translate-y-4">
              <Line className="w-full"></Line>
            </div>

            <div className="relative grid grid-cols-3">
              <figure className="flex flex-col items-center">
                <div className="h-32">
                  <img
                    src="/img/umbrella.png"
                    alt="umbrella"
                    className="w-full"
                  />
                </div>
                <figcaption className="text-center text-sm">
                  Vælge hvordan du og dine børn ønsker at blive dækket
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center">
                <div className="h-32">
                  <img src="/img/phone.png" alt="phone" className="w-full" />
                </div>
                <figcaption className="text-center text-sm">
                  Personlige oplysninger
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center">
                <div className="h-32">
                  <img
                    src="/img/medical.png"
                    alt="medical"
                    className="w-full"
                  />
                </div>
                <figcaption className="text-center text-sm">
                  Helbredsoplysninger
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <button className="inline-flex px-6 py-3 bg-sd-primary hover:bg-sd-primary-hover rounded-full shadow-lg hover:shadow-xl space-x-2 transition duration-100 ease-in-out">
            <span>Gå i gang</span>
            <ArrowRight></ArrowRight>
          </button>
          <button className="underline">Gå til kladde</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Welcome
