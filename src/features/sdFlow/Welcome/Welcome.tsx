import clsx from 'clsx'
import s from './Welcome.module.css'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
}

const Welcome: FunctionComponent<Props> = ({ className }): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <div className={rootClassName}>
      <h1 className="text-4xl">Bliv medlem i dag?</h1>
      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non
        metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor.
      </p>
      <h2>I flowet skal du følgende</h2>
      <div className="relative">
        <div className="absolute inset-0"></div>
        <div className="grid grid-cols-3"></div>
      </div>
    </div>
  )
}

export default Welcome
