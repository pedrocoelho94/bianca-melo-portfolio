import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Header from 'components/Header'
import * as S from './styles'

type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Header />
    <S.Content>{children}</S.Content>
    <GoTop />
    <Footer />
  </S.Wrapper>
)

export default BaseTemplate
