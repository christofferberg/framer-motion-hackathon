import { Container } from '@components/ui'
import { Layout } from '@components/common'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { Close } from '@components/icons'
import Image from 'next/image'
import { useClickAway } from 'react-use'

type Subsidy = {
  id: number
  imageUrl: string
  title: string
  description: string
  longText: string
}

const subsidies: readonly Subsidy[] = [
  {
    id: 1,
    imageUrl: '/img/Børnetandpleje2.png',
    title: 'Børnetilvalg',
    description: 'Når de små skal være helt sikre',
    longText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi minima possimus, ipsum incidunt aperiam reiciendis quam culpa necessitatibus. Doloribus laboriosam commodi quasi facilis sapiente architecto minima magni, earum, fuga minus, rem repellat. Sequi iure temporibus consequuntur rerum tenetur impedit, sunt nemo eos tempore repellendus voluptatibus eius earum ab obcaecati! Voluptas, non incidunt quisquam enim vel, exercitationem sequi cumque ducimus fugiat maiores recusandae ex ipsam provident, nisi quibusdam similique dolorem natus porro est atque corrupti dignissimos. Nihil labore animi ea ratione voluptatibus saepe, odio exercitationem, expedita consectetur error impedit dolorum nobis esse ipsa provident dolor reiciendis, soluta molestiae nulla laboriosam?

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consequuntur maxime, facere provident, cumque dolor ducimus obcaecati delectus velit iste est molestiae rerum, eos dolore labore in eligendi. Ad facere culpa in nostrum odio autem commodi ipsam, perspiciatis minima? Eius molestias suscipit neque. Ut eos amet quam autem! Expedita quod est repellat voluptatibus pariatur dolores ullam inventore vero consequuntur nulla sequi similique reprehenderit repudiandae, laudantium non quia beatae quo quaerat.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, rerum saepe odit voluptatem, reprehenderit porro libero modi architecto quis corrupti, amet culpa alias. Optio non quo illo cumque distinctio sed nihil explicabo possimus animi perspiciatis natus facere dolorum aliquam maxime voluptas placeat pariatur, odio modi et at eius sapiente corrupti molestiae quos? Unde ex, explicabo quae tempora laboriosam fugiat maiores impedit. Ducimus neque architecto aliquid voluptatibus, ex vero corporis nulla temporibus quas alias nobis provident cum perferendis ipsum laboriosam explicabo dolore quis quo. Illum fugit odio similique. Ex porro, iusto eligendi omnis dolor error? Eum consectetur eveniet unde assumenda natus modi perspiciatis. Maiores et laboriosam inventore est possimus facilis aperiam, aut nesciunt adipisci, nulla illum praesentium. Excepturi rem esse perspiciatis!`,
  },
  {
    id: 2,
    imageUrl: '/img/Operation.png',
    title: 'Operation',
    description: 'Med tilvalget Operation sikrer du dig mod store udgifter',
    longText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi minima possimus, ipsum incidunt aperiam reiciendis quam culpa necessitatibus. Doloribus laboriosam commodi quasi facilis sapiente architecto minima magni, earum, fuga minus, rem repellat. Sequi iure temporibus consequuntur rerum tenetur impedit, sunt nemo eos tempore repellendus voluptatibus eius earum ab obcaecati! Voluptas, non incidunt quisquam enim vel, exercitationem sequi cumque ducimus fugiat maiores recusandae ex ipsam provident, nisi quibusdam similique dolorem natus porro est atque corrupti dignissimos. Nihil labore animi ea ratione voluptatibus saepe, odio exercitationem, expedita consectetur error impedit dolorum nobis esse ipsa provident dolor reiciendis, soluta molestiae nulla laboriosam?

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consequuntur maxime, facere provident, cumque dolor ducimus obcaecati delectus velit iste est molestiae rerum, eos dolore labore in eligendi. Ad facere culpa in nostrum odio autem commodi ipsam, perspiciatis minima? Eius molestias suscipit neque. Ut eos amet quam autem! Expedita quod est repellat voluptatibus pariatur dolores ullam inventore vero consequuntur nulla sequi similique reprehenderit repudiandae, laudantium non quia beatae quo quaerat.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, rerum saepe odit voluptatem, reprehenderit porro libero modi architecto quis corrupti, amet culpa alias. Optio non quo illo cumque distinctio sed nihil explicabo possimus animi perspiciatis natus facere dolorum aliquam maxime voluptas placeat pariatur, odio modi et at eius sapiente corrupti molestiae quos? Unde ex, explicabo quae tempora laboriosam fugiat maiores impedit. Ducimus neque architecto aliquid voluptatibus, ex vero corporis nulla temporibus quas alias nobis provident cum perferendis ipsum laboriosam explicabo dolore quis quo. Illum fugit odio similique. Ex porro, iusto eligendi omnis dolor error? Eum consectetur eveniet unde assumenda natus modi perspiciatis. Maiores et laboriosam inventore est possimus facilis aperiam, aut nesciunt adipisci, nulla illum praesentium. Excepturi rem esse perspiciatis!`,
  },
  {
    id: 3,
    imageUrl: '/img/Speciallæger.png',
    title: 'Rejseforsikring',
    description: 'Ønsker du tryghed på rejsen?',
    longText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi minima possimus, ipsum incidunt aperiam reiciendis quam culpa necessitatibus. Doloribus laboriosam commodi quasi facilis sapiente architecto minima magni, earum, fuga minus, rem repellat. Sequi iure temporibus consequuntur rerum tenetur impedit, sunt nemo eos tempore repellendus voluptatibus eius earum ab obcaecati! Voluptas, non incidunt quisquam enim vel, exercitationem sequi cumque ducimus fugiat maiores recusandae ex ipsam provident, nisi quibusdam similique dolorem natus porro est atque corrupti dignissimos. Nihil labore animi ea ratione voluptatibus saepe, odio exercitationem, expedita consectetur error impedit dolorum nobis esse ipsa provident dolor reiciendis, soluta molestiae nulla laboriosam?

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consequuntur maxime, facere provident, cumque dolor ducimus obcaecati delectus velit iste est molestiae rerum, eos dolore labore in eligendi. Ad facere culpa in nostrum odio autem commodi ipsam, perspiciatis minima? Eius molestias suscipit neque. Ut eos amet quam autem! Expedita quod est repellat voluptatibus pariatur dolores ullam inventore vero consequuntur nulla sequi similique reprehenderit repudiandae, laudantium non quia beatae quo quaerat.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, rerum saepe odit voluptatem, reprehenderit porro libero modi architecto quis corrupti, amet culpa alias. Optio non quo illo cumque distinctio sed nihil explicabo possimus animi perspiciatis natus facere dolorum aliquam maxime voluptas placeat pariatur, odio modi et at eius sapiente corrupti molestiae quos? Unde ex, explicabo quae tempora laboriosam fugiat maiores impedit. Ducimus neque architecto aliquid voluptatibus, ex vero corporis nulla temporibus quas alias nobis provident cum perferendis ipsum laboriosam explicabo dolore quis quo. Illum fugit odio similique. Ex porro, iusto eligendi omnis dolor error? Eum consectetur eveniet unde assumenda natus modi perspiciatis. Maiores et laboriosam inventore est possimus facilis aperiam, aut nesciunt adipisci, nulla illum praesentium. Excepturi rem esse perspiciatis!`,
  },
] as const

type SingleSubsidyProps = {
  subsidy: Subsidy
  onClose(): void
}

const SingleSubsidy: FunctionComponent<SingleSubsidyProps> = ({
  subsidy,
  onClose,
}) => {
  const modalRef = useRef(null)

  useClickAway(modalRef, () => {
    onClose()
  })

  return (
    <div className="fixed z-20 inset-y-0 left-1/2 w-full transform -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75"
      ></motion.div>
      <div className="relative m-10 mx-auto w-full max-w-5xl" ref={modalRef}>
        <motion.div
          layoutId={`subsidy-${subsidy.id}`}
          className="relative bg-white rounded-xl overflow-hidden"
        >
          <button onClick={onClose} className="absolute z-30 right-6 top-6">
            <Close className="w-10 h-10 text-black" />
          </button>
          <motion.figure
            layoutId={`subsidy-image-${subsidy.id}`}
            className="flex items-center justify-center bg-gray-50"
          >
            <Image
              src={subsidy.imageUrl}
              alt={subsidy.title}
              width="500"
              height="500"
              className="w-full object-contain"
            />
          </motion.figure>
          <motion.div
            className="p-6 space-y-8"
            layoutId={`subsidy-content-${subsidy.id}`}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-wider uppercase">
                {subsidy.title}
              </h3>
              <p className="text-gray-500 text-lg">{subsidy.description}</p>
            </div>
            <div className="space-y-4">
              {subsidy.longText.split('\n').map((text, index) => (
                <p className="text-gray-500" key={index}>
                  {text}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

type SubsidyProps = {
  subsidy: Subsidy
  onSelect(subsidy: Subsidy): void
}

const Subsidy: FunctionComponent<SubsidyProps> = ({ subsidy, onSelect }) => {
  return (
    <motion.div
      layoutId={`subsidy-${subsidy.id}`}
      className="flex flex-col text-gray-900 bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="flex-1">
        <motion.figure
          layoutId={`subsidy-image-${subsidy.id}`}
          className="flex items-center justify-center bg-gray-50"
        >
          <Image
            src={subsidy.imageUrl}
            alt={subsidy.title}
            width="500"
            height="500"
            className="object-contain"
          />
        </motion.figure>
        <motion.div className="p-6" layoutId={`subsidy-content-${subsidy.id}`}>
          <h3 className="text-2xl font-bold">{subsidy.title}</h3>
          <p className="text-gray-500">{subsidy.description}</p>
        </motion.div>
      </div>
      <button
        className="flex items-center justify-center p-6 w-full text-lg bg-gray-50 space-x-2"
        onClick={() => onSelect(subsidy)}
      >
        Se detaljer
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </motion.div>
  )
}

export default function SdSubsidies(): JSX.Element {
  const [selected, setSelected] = useState<Subsidy>()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  })

  const handleSelect = (subsidy: Subsidy) => {
    setSelected(undefined)

    setTimeout(() => {
      if (mounted) {
        setSelected(subsidy)
      }
    }, 150)
  }

  const handleClose = () => {
    setSelected(undefined)
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <Container>
        <div className="py-32 space-y-16">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold leading-tight">Vælg tilvalg</h1>
            <p className="text-lg leading-tight">
              Her kan du få et overblik over dine mulige tilvalg.
            </p>
          </div>
          <div>
            <AnimatePresence>
              {selected ? (
                <SingleSubsidy subsidy={selected} onClose={handleClose} />
              ) : null}
            </AnimatePresence>
          </div>
          <div className="grid gap-x-8 grid-flow-col">
            {subsidies.map((subsidy) => (
              <Subsidy
                key={subsidy.id}
                subsidy={subsidy}
                onSelect={handleSelect}
              ></Subsidy>
            ))}
          </div>
        </div>
      </Container>
    </AnimateSharedLayout>
  )
}

SdSubsidies.Layout = Layout
