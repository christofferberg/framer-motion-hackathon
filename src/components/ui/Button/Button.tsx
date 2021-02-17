import clsx from 'clsx'
import mergeRefs from 'react-merge-refs'
import s from './Button.module.css'
import {
  ButtonHTMLAttributes,
  forwardRef,
  FunctionComponent,
  useRef,
} from 'react'
import { LoadingDots } from '@components/ui'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?: 'purple' | 'sd' | 'sd-outline'
  size?: 'sm' | 'md' | 'lg'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  isLoading?: boolean
  isDisabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = forwardRef(
  (props, buttonRef) => {
    const {
      className,
      variant = 'purple',
      size = 'md',
      children,
      active,
      isLoading = false,
      isDisabled = false,
      style = {},
      ...rest
    } = props
    const ref = useRef<HTMLButtonElement>(null)

    const rootClassName = clsx(
      s.root,
      {
        [s.purple]: variant === 'purple',
        [s.sd]: variant === 'sd',
        [s.sdOutline]: variant === 'sd-outline',
        [s.sm]: size === 'sm',
        [s.md]: size === 'md',
        [s.isLoading]: isLoading,
        [s.isDisabled]: isDisabled,
      },
      className
    )

    return (
      <button
        aria-pressed={active}
        aria-disabled={isDisabled}
        ref={mergeRefs([ref, buttonRef])}
        className={rootClassName}
        disabled={isDisabled}
        style={{
          ...style,
        }}
        {...rest}
      >
        {!isLoading && children}

        {isLoading && (
          <i className="flex m-0 pl-2">
            <LoadingDots />
          </i>
        )}
      </button>
    )
  }
)

export default Button
