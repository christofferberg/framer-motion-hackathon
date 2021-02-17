import clsx from 'clsx'
import Line from '@components/icons/Line'
import s from './BecomeMember.module.css'
import { FunctionComponent } from 'react'
import { motion, Spring } from 'framer-motion'
import { Container } from '@components/ui'

interface Props {
  className?: string
}

const spring: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

const BecomeMember: FunctionComponent<Props> = ({ className }): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <motion.div
      className={rootClassName}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 1.15 } }}
      transition={spring}
    >
      <Container size="md" className="space-y-16">
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
          <h2 className="text-xl font-semibold leading-tight">
            I flowet skal du følgende
          </h2>

          <div className="relative">
            <div className="absolute inset-0 px-28 transform -translate-y-4">
              <Line className="w-full" />
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
      </Container>
    </motion.div>
  )
}

export default BecomeMember
