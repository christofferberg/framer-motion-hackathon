import clsx from 'clsx'
import s from './FeatureBar.module.css'
import { FunctionComponent, ReactNode } from 'react'

interface Props {
  action?: ReactNode
  className?: string
  description?: string
  hide?: boolean
  title: string
}

const FeatureBar: FunctionComponent<Props> = ({
  title,
  description,
  className,
  action,
  hide,
}) => {
  const rootClassName = clsx(
    s.root,
    {
      transform: true,
      'translate-y-0 opacity-100': !hide,
      'translate-y-full opacity-0': hide,
    },
    className
  )

  return (
    <div className={rootClassName}>
      <span className="block md:inline">{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2">
        {description}
      </span>

      {action && action}
    </div>
  )
}

export default FeatureBar
