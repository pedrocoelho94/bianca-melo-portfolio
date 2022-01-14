import Link, { LinkProps } from 'next/link'

type HeaderLinkProps = {
  children: React.ReactNode
} & LinkProps

const HeaderLink = ({ children, ...rest }: HeaderLinkProps) => (
  <Link {...rest} passHref>
    <a>{children}</a>
  </Link>
)

export default HeaderLink
