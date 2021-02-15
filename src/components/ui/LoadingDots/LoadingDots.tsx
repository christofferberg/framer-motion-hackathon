import s from './LoadingDots.module.css'
import { FunctionComponent } from 'react'

const LoadingDots: FunctionComponent = () => {
  return (
    <span className={s.root}>
      <span />
      <span />
      <span />
    </span>
  )
}

export default LoadingDots
