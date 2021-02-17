import { FunctionComponent } from 'react'
import clsx from 'clsx'

import s from './PersonalInformation.module.css'

interface Props {
  className?: string
}

const PersonalInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return <div className={rootClassName}></div>
}

export default PersonalInformation
