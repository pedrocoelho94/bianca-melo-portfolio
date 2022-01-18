import Link from 'next/link'
import * as S from './styles'

type LinkTag = {
  title: string
  slug: string
}

export type PostTagsProps = {
  text: string
  link?: LinkTag[]
  route: string
}

const PostTags = ({ link = [], route, text }: PostTagsProps) => {
  if (link.length === 0) return null

  // organiza as tags em ordem alfabetica
  link.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))

  return (
    <S.Wrapper>
      {text}{' '}
      {link?.map((item) => (
        <span key={item.slug}>
          <Link href={`/${route}/${item.slug}`} passHref>
            <a>{item.title}</a>
          </Link>
        </span>
      ))}
    </S.Wrapper>
  )
}

export default PostTags
