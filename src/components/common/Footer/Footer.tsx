import clsx from 'clsx'
import { Container } from '@components/ui'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
  children?: any
}

const Footer: FunctionComponent<Props> = ({ className }) => {
  const rootClassName = clsx('mt-48', className)

  return (
    <footer className={rootClassName}>
      <Container>Footer</Container>
    </footer>
  )
}

export default Footer
