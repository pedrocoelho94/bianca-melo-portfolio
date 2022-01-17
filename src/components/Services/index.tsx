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
      link="/portfolio/cat/reportagens-multimidia"
      title="Reportagens Multimídia"
    />

    <ServicesBox
      icon={<Colorize />}
      link="/portfolio/cat/artes-graficas"
      title="Artes Gráficas"
    />

    <ServicesBox
      icon={<PhotoCamera />}
      link="/portfolio/cat/ensaios-fotograficos"
      title="Ensaios Fotográficos"
    />

    <ServicesBox
      icon={<Podcasts />}
      link="/portfolio/cat/radio-e-podcast"
      title="Rádio e Podcast"
    />

    <ServicesBox
      icon={<Article />}
      link="/portfolio/cat/artigos-academicos"
      title="Artigos Acadêmicos"
    />

    <ServicesBox
      icon={<VideoCameraBack />}
      link="/portfolio/cat/producoes-audiovisuais"
      title="Produções Audiovisuais"
    />
  </S.Wrapper>
)

export default Services
