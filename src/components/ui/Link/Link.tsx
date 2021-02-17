import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import clsx from 'clsx'

interface Props extends NextLinkProps {
  activeClassName?: string
  className?: string
}

const Link: FunctionComponent<Props> = ({
  href,
  activeClassName,
  className,
  children,
  ...props
}) => {
  const router = useRouter()
  const isCurrentPath = router.pathname === href
  const linkClassName = clsx(className)

  return (
    <NextLink href={href} {...props}>
      <a className={linkClassName}>{children}</a>
    </NextLink>
  )
}

export default Link
