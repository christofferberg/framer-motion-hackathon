import clsx from 'clsx'
import s from './Container.module.css'
import { ComponentType, FunctionComponent, HTMLAttributes } from 'react'

interface Props {
  className?: string
  children?: any
  el?: HTMLElement
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Container: FunctionComponent<Props> = ({
  children,
  className,
  el = 'div',
  size = 'xl',
}) => {
  const rootClassName = clsx(
    s.root,
    {
      'max-w-screen-sm': size === 'sm',
      'max-w-screen-md': size === 'md',
      'max-w-screen-lg': size === 'lg',
      'max-w-screen-xl': size === 'xl',
      'max-w-screen-2xl': size === '2xl',
    },
    className
  )

  const Component: ComponentType<HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
