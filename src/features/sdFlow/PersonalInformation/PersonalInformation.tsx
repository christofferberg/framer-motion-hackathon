import clsx from 'clsx'
import s from './PersonalInformation.module.css'
import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

interface Props {
  className?: string
}

const PersonalInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <motion.div exit={{ opacity: 0 }} className={rootClassName}>
      <h2>Personal information</h2>
    </motion.div>
  )
}

export default PersonalInformation
