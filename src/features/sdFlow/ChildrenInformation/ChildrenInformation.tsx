import clsx from 'clsx'
import s from './ChildrenInformation.module.css'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { motion, Spring, useSpring } from 'framer-motion'

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
] as const

const spring: Spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

const ChildrenInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const x = useSpring(0, { stiffness: 300, damping: 30 })
  const [selected, setSelected] = useState<{ index: number; option: Option }>({
    index: 0,
    option: options[0],
  })

  const rootClassName = clsx(s.root, {}, className)
  const boxRef = useRef<HTMLDivElement>(null)
  const boxWidth = boxRef.current?.getBoundingClientRect().width ?? 0

  function updatePosition(index: number, option: Option) {
    x.set(index * (boxWidth / options.length))

    setSelected({ index, option })
  }

  useEffect(() => {
    const onResize = () => {
      updatePosition(selected.index, selected.option)
    }

    document.addEventListener('resize', () => onResize)

    return () => {
      document.addEventListener('resize', onResize)
    }
  }, [])

  return (
    <motion.div
      className={rootClassName}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.1 } }}
      transition={spring}
    >
      <div className="mx-auto max-w-3xl space-y-16">
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

        <div className="relative flex h-16 bg-gray-100 rounded-lg">
          <div className="absolute inset-x-0 flex h-full pointer-events-none">
            <motion.div className="flex items-center p-2 w-1/5">
              <motion.button
                className="px-4 py-2 w-full h-full text-center text-white bg-sd-primary border-2 border-sd-primary-hover rounded-lg pointer-events-auto"
                style={{
                  x,
                }}
              >
                {selected?.option.value}
              </motion.button>
            </motion.div>
          </div>

          <div
            className="grid grid-cols-5 p-4 w-full text-center text-gray-400 divide-x"
            ref={boxRef}
          >
            {options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => {
                  updatePosition(index, option)
                }}
              >
                {option.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ChildrenInformation
