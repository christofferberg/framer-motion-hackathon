import { CgDarkMode } from 'react-icons/cg'
import { FunctionComponent } from 'react'
import { IconBaseProps } from 'react-icons'

const ColorMode: FunctionComponent<IconBaseProps> = ({ ...props }) => {
  return <CgDarkMode {...props} />
}

export default ColorMode
