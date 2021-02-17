import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'
import { BsArrowLeftShort } from 'react-icons/bs'

const ArrowLeft: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <BsArrowLeftShort {...props} />
}

export default ArrowLeft
