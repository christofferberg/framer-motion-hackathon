import { Container, Link } from '@components/ui'
import { Layout } from '@components/common'
import { motion, Variants } from 'framer-motion'

interface Example {
  id: number
  title: string
  description: string
  href: string
}

export default function Home(): JSX.Element {
  const examples: Example[] = [
    {
      id: 1,
      title: 'Example one',
      description:
        'Augue penatibus dictum sapien luctus torquent fringilla mus himenaeos iaculis non, lorem sodales a maecenas malesuada faucibus facilisis amet semper ridiculus dolor, bibendum nascetur suscipit cursus scelerisque proin elementum conubia commodo. Purus eros class rhoncus duis risus tempus lacinia fermentum elementum justo bibendum curae, dolor laoreet imperdiet odio aliquam cubilia vestibulum varius est id. Nunc ac primis lacinia congue in at ut, ligula mus eleifend faucibus montes consectetur, varius blandit velit interdum dis dui.',
      href: '/example-one',
    },
    {
      id: 2,
      title: 'Example two',
      description:
        'Odio neque hac aptent malesuada libero accumsan nibh litora dolor dignissim orci blandit quam senectus, quis sociis pretium mus porta risus scelerisque ipsum consectetur urna lacus pharetra. Feugiat ad in nascetur cubilia mattis nullam ante dolor, vehicula dignissim vestibulum tortor ultricies est quam, pharetra gravida nibh odio neque libero adipiscing.',
      href: '/example-two',
    },
    {
      id: 3,
      title: 'Example three',
      description:
        'Non diam consequat vivamus pellentesque neque hac pharetra penatibus lacinia ipsum nam blandit mus mattis eget bibendum dolor sagittis, ullamcorper eros dui senectus dis proin quis himenaeos integer nec id tempus tellus est eu taciti parturient. Senectus nascetur blandit nam himenaeos dolor massa libero accumsan litora, inceptos ultricies justo vel aenean faucibus penatibus lectus nunc primis, dis ligula quisque eu morbi interdum sodales scelerisque.',
      href: '/example-three',
    },
    {
      id: 4,
      title: 'Example four',
      description:
        'Augue penatibus dictum sapien luctus duis risus tempus lacinia fermentum elementum justo bibendum curae, dolor laoreet imperdiet odio aliquam cubilia vestibulum varius est id. Nunc ac primis lacinia congue in at ut, ligula mus eleifend faucibus montes consectetur, varius blandit velit interdum dis dui.',
      href: '/example-four',
    },
  ]

  const exampleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <Link href={example.href}>
              <div className="dark:hover:text-primary p-6 h-full hover:text-accents-1 bg-primary-2 hover:bg-purple rounded shadow transition md:p-8">
                <h2 className="mb-4 text-4xl font-bold">{example.title}</h2>
                <p>{example.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}

Home.Layout = Layout
