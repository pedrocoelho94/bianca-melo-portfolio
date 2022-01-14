import Link from 'next/link'
import * as S from './styles'

type ServicesBoxProps = {
  icon?: React.ReactNode
  title: string
  link: string
}

const ServicesBox = ({ icon, title = '/', link }: ServicesBoxProps) => (
  <S.Wrapper>
    <S.Overlay></S.Overlay>
    <Link href={link}>
      <a>
        {icon}
        <span>{title}</span>
      </a>
    </Link>
  </S.Wrapper>
)

export default ServicesBox
