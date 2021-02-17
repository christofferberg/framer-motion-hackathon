import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'
import { BsArrowRightShort } from 'react-icons/bs'

const ArrowRight: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <BsArrowRightShort {...props} />
}

export default ArrowRight
