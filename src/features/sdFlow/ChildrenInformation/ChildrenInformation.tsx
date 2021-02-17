import clsx from 'clsx'
import s from './ChildrenInformation.module.css'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
}

const ChildrenInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <div className={rootClassName}>
      <h2>Children information</h2>
    </div>
  )
}

export default ChildrenInformation
