import clsx from 'clsx'
import s from './Prose.module.css'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
  html: string
}

const Prose: FunctionComponent<Props> = ({ html, className }) => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <article
      className={rootClassName}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Prose
