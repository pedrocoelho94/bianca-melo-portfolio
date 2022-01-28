import { GetStaticProps } from 'next'
import ContactTemplate from 'templates/ContactTemplate'

export default function ContatoPage() {
  return <ContactTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24, // 24 hours
    props: {}
  }
}
