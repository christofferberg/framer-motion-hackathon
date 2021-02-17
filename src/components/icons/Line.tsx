import { FunctionComponent, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

const Line: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 530 149"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M524.188 50.7245C474.333 111.678 291.957 131.455 197.288 73.023C156.562 47.8857 67.4721 48.315 0.375758 60.8585"
        strokeWidth="1.8"
        strokeDasharray="6 6"
      />
    </svg>
  )
}

export default Line
