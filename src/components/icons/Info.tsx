import { RiInformationFill } from 'react-icons/ri'
import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'

const Info: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <RiInformationFill {...props} />
}

export default Info
