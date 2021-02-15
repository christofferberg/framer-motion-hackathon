import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'
import { SiFramer } from 'react-icons/si'

const Logo: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <SiFramer {...props} />
}

export default Logo
