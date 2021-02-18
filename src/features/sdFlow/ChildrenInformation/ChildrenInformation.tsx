import clsx from 'clsx'
import s from './ChildrenInformation.module.css'
import { Container } from '@components/ui'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { motion, Spring, useSpring } from 'framer-motion'
import { ResizeObserver } from 'resize-observer'

interface Props {
  className?: string
}

type Option = {
  id: number
  value: string | number
}

const options: readonly Option[] = [
  {
    id: 0,
    value: 'Ingen børn',
  },
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
]

const spring: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

interface UpdatePositionOptions {
  event: React.MouseEvent<HTMLButtonElement>
  index: number
  option: Option
  reselect?: boolean
}

const ChildrenInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const x = useSpring(0, { stiffness: 200, damping: 20 })
  const [selected, setSelected] = useState<{ index: number; option: Option }>({
    index: 0,
    option: options[0],
  })

  const rootClassName = clsx(s.root, {}, className)
  const boxRef = useRef<HTMLDivElement>(null)
  const boxWidth = useRef(0)

  function updatePosition(options: UpdatePositionOptions): void
  function updatePosition(index: number, option: Option, select?: boolean): void
  function updatePosition(
    indexOrOptions: number | UpdatePositionOptions,
    option?: Option,
    reselect = true
  ) {
    const index =
      typeof indexOrOptions === 'number' ? indexOrOptions : indexOrOptions.index

    if (typeof indexOrOptions === 'number') {
      x.set(index * (boxWidth.current / options.length))

      if (reselect) {
        setSelected({ index, option: option ?? { id: 0, value: '' } })
      }
    } else {
      const { event, index, option, reselect } = indexOrOptions

      const { x: buttonX } = event.currentTarget.getBoundingClientRect()
      const boxX = boxRef.current?.getBoundingClientRect().x ?? 0
      const padding = boxRef.current
        ? parseInt(getComputedStyle(boxRef.current).padding, 10)
        : 0

      x.set(buttonX - boxX - padding)

      if (reselect) {
        setSelected({ index, option })
      }
    }
  }

  useEffect(() => {
    let observer: ResizeObserver

    if (boxRef.current) {
      observer = new ResizeObserver(([entry]) => {
        boxWidth.current = entry.contentRect.width

        if (!x.isAnimating()) {
          updatePosition(selected.index, selected.option, false)
        }
      })

      observer.observe(boxRef.current)
    }

    return () => {
      observer?.disconnect()
    }
  }, [selected])

  return (
    <motion.div
      className={rootClassName}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.1 } }}
      transition={spring}
    >
      <Container size="sm">
        <div className="space-y-16">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold leading-tight">
              Hvor mange børn har du?
            </h1>

            <p className="text-xl leading-tight">
              I “danmark” kan du ansøge om medlemskab på vegne af dine børn.
              Børnene er gratis medforsikret, indtil de fylder 16 år. Du kan
              ansøge på vegne af op til 8 børn.
            </p>
          </div>

          <div className="relative flex h-14 bg-primary-2 rounded">
            <div className="absolute inset-x-0 flex h-full pointer-events-none">
              <motion.div className="flex items-center m-1 w-1/5">
                <motion.button
                  className="px-4 py-2 w-full h-full text-center text-white text-sm font-bold bg-sd-primary border border-sd-primary-hover rounded-lg pointer-events-auto"
                  style={{
                    x,
                  }}
                >
                  {selected?.option.value}
                </motion.button>
              </motion.div>
            </div>

            <div
              className="grid grid-cols-5 p-2 w-full text-center text-gray-400"
              ref={boxRef}
            >
              {options.map((option, index) => (
                <button
                  className="dark:hover:bg-accents-2 text-sm font-bold hover:bg-accents-3 rounded"
                  key={option.id}
                  onClick={(event) => updatePosition({ event, index, option })}
                >
                  {option.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ChildrenInformation
