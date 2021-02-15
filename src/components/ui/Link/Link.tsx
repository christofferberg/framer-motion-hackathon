import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

interface Props extends NextLinkProps {
  activeClassName?: string
}

const Link: FunctionComponent<Props> = ({
  href,
  activeClassName,
  children,
  ...props
}) => {
  const router = useRouter()
  const isCurrentPath = router.pathname === href

  return (
    <NextLink href={href} {...props}>
      <a className={isCurrentPath ? activeClassName : undefined}>{children}</a>
    </NextLink>
  )
}

export default Link
