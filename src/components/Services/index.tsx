import ServicesBox from 'components/ServicesBox'
import * as S from './styles'
import {
  VideoCameraBack,
  Colorize,
  PhotoCamera,
  Podcasts,
  Article,
  Email
} from '@styled-icons/material-outlined'

const Services = () => (
  <S.Wrapper>
    <ServicesBox
      icon={<Email />}
      link="/category/reportagens-multimidia"
      title="Reportagens Multimídia"
    />

    <ServicesBox
      icon={<Colorize />}
      link="/category/artes-graficas"
      title="Artes Gráficas"
    />

    <ServicesBox
      icon={<PhotoCamera />}
      link="/category/ensaios-fotograficos"
      title="Ensaios Fotográficos"
    />

    <ServicesBox
      icon={<Podcasts />}
      link="/category/radio-e-podcast"
      title="Rádio e Podcast"
    />

    <ServicesBox
      icon={<Article />}
      link="/category/artigos-academicos"
      title="Artigos Acadêmicos"
    />

    <ServicesBox
      icon={<VideoCameraBack />}
      link="/category/producoes-audiovisuais"
      title="Produções Audiovisuais"
    />
  </S.Wrapper>
)

export default Services
