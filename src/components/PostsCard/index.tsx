import Link from 'next/link'
import * as S from './styles'

type PostsCardProps = {
  title: string
  slug: string
  excerpt: string
  createdAt: string
}

const PostsCard = ({ title, slug, excerpt, createdAt }: PostsCardProps) => (
  <S.Wrapper>
    <S.Date>{createdAt}</S.Date>
    <Link href={`/post/${slug}`}>
      <a>
        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
      </a>
    </Link>
  </S.Wrapper>
)

export default PostsCard
