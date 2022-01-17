import Link from 'next/link'
import * as S from './styles'

type category = {
  slug: string
  title: string
}

type tag = {
  slug: string
  title: string
}

export type PostProps = {
  title?: string
  excerpt?: string
  createdAt?: string
  cover?: string
  categories?: category[]
  tags?: tag[]
  description?: string
  demoProject?: string
}

const Post = ({
  title,
  excerpt,
  createdAt,
  cover,
  categories,
  tags,
  description,
  demoProject
}: PostProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>

    <S.Excerpt>{excerpt}</S.Excerpt>

    <S.Info>
      <S.Date>{createdAt}</S.Date>

      <S.Categories>
        {categories?.map((cat) => (
          <Link href={`cat/${cat.slug}`} key={cat.slug}>
            <a>
              <div>{cat.title}</div>
            </a>
          </Link>
        ))}
      </S.Categories>
    </S.Info>

    <S.Cover src={cover} alt="" />

    <S.Demo>{demoProject}</S.Demo>
    {!!description && (
      <S.Description dangerouslySetInnerHTML={{ __html: description }} />
    )}

    {!!tags && (
      <S.Tags>
        Tags:
        {tags?.map((tag) => (
          <div key={tag.slug}>{tag.title}</div>
        ))}
      </S.Tags>
    )}
  </S.Wrapper>
)

export default Post
