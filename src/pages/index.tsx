import { Container, Link } from '@components/ui'
import { Layout } from '@components/common'
import { motion, Variants } from 'framer-motion'

interface Example {
  id: number
  title: string
  description: string
  href: string
  backgroundColor?: string
}

export default function Home(): JSX.Element {
  const examples: Example[] = [
    {
      id: 1,
      title: 'Sygeforsikring Danmark indmeldelsesflow',
      description:
        'Prototype af Sygeforsikring Danmarks indmeldelsesflow til nye medlemmer.',
      href: '/sd-flow',
      backgroundColor: '#dc1c24',
    },
    {
      id: 2,
      title: 'Sygeforsikring danmark drawer form',
      description: '',
      href: '/sd-drawer-form',
    },
    {
      id: 3,
      title: 'Sygeforsikring Danmark tilskud',
      description:
        'Prototype af hvordan Sygeforsikringen "danmark"s tilskud kan animeres til en modal.',
      href: '/sd-subsidies',
    },
  ]

  const exampleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const exampleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 8 },
    },
  }

  return (
    <Container className="mt-10">
      <motion.div
        variants={exampleContainerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 grid-cols-1 md:grid-cols-2"
      >
        {examples.map((example) => (
          <motion.div variants={exampleVariants} key={example.id}>
            <Link
              href={example.href}
              className="dark:hover:text-primary dark:focus:text-primary block p-6 h-full hover:text-accents-1 focus:text-accents-1 bg-primary-2 hover:bg-purple focus:bg-purple rounded shadow hover:shadow-lg focus:shadow-lg transform hover:scale-103 focus:scale-103 transition md:p-8"
            >
              <h2 className="mb-4 text-4xl font-bold">{example.title}</h2>
              <p>{example.description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}

Home.Layout = Layout
