import clsx from 'clsx'
import kebabCase from 'lodash/kebabCase'
import s from './Input.module.css'
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name: string
  value?: string
  selectOnFocus?: boolean
  onChange?: (...args: any[]) => any
  valueLabel?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      value,
      selectOnFocus = true,
      onChange,
      valueLabel,
      ...props
    },
    ref
  ) => {
    const rootClassName = clsx(s.root, {}, className)
    const inputClassName = clsx(s.input, {})

    const handleOnChange = ({
      target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return

      onChange(value)
    }

    const handleOnFocus = () => {
      if (!value) return

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      selectOnFocus && ref?.current.select()
    }

    return (
      <div className={rootClassName}>
        {label && (
          <label
            className="block mb-1 text-muted text-sm"
            htmlFor={kebabCase(name)}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            className={inputClassName}
            id={kebabCase(name)}
            ref={ref}
            name={name}
            value={value}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            {...props}
          />

          {valueLabel ? (
            <span className="absolute right-0 top-0 flex items-center justify-center p-4 h-full text-muted">
              {valueLabel}
            </span>
          ) : null}
        </div>
      </div>
    )
  }
)

export default Input
