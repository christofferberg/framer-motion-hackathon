import clsx from 'clsx'
import s from './Footer.module.css'
import { Container } from '@components/ui'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
  children?: any
}

const Footer: FunctionComponent<Props> = ({ className }) => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <footer className={rootClassName}>
      <Container>Adapt Agency 2021</Container>
    </footer>
  )
}

export default Footer
