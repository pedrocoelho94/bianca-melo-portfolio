import PostTags from 'components/PostTags'
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
  route: string
}

const Post = ({
  title,
  excerpt,
  createdAt,
  cover,
  categories,
  tags,
  description,
  demoProject,
  route
}: PostProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>

    <S.Excerpt>{excerpt}</S.Excerpt>

    <S.Info>
      <S.Date>{createdAt}</S.Date>

      <S.Categories>
        <PostTags link={categories} route={route} text="" />
      </S.Categories>
    </S.Info>

    <S.Cover src={cover} alt="" />

    <S.Demo>
      <a href={demoProject} target="_blank" rel="noreferrer">
        Ver projeto
      </a>
    </S.Demo>

    {!!description && (
      <S.Description dangerouslySetInnerHTML={{ __html: description }} />
    )}

    {!!tags && <PostTags link={tags} route="tag" text="Saiba mais:" />}
  </S.Wrapper>
)

export default Post
