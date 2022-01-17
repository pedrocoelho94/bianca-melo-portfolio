import Link from 'next/link'
import * as S from './styles'

type category = {
  slug: string
  title: string
}

type PostsBoxProps = {
  title: string
  slug: string
  cover: {
    url: string
  }
  categories: category[]
  excerpt?: string
  route: string
}

const PostsBox = ({
  title,
  slug,
  cover,
  categories,
  excerpt,
  route
}: PostsBoxProps) => (
  <S.Wrapper>
    <S.CoverContainer>
      <Link href={`/${route}/${slug}`}>
        <a>
          <S.Cover src={cover.url} />
        </a>
      </Link>
    </S.CoverContainer>

    <S.Content>
      <S.Category>
        {categories.map((category) => (
          <div key={category.slug}>
            <Link href={`${category.slug}`}>
              <a>{category.title}</a>
            </Link>
          </div>
        ))}
      </S.Category>
      <S.Title>
        <Link href={`/${route}/${slug}`}>
          <a>{title}</a>
        </Link>
      </S.Title>
      <S.Excerpt>
        {!!excerpt && (
          <Link href={`/${route}/${slug}`}>
            <a>{excerpt}</a>
          </Link>
        )}
      </S.Excerpt>
    </S.Content>
  </S.Wrapper>
)

export default PostsBox
