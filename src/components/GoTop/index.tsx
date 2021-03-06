import * as S from './styles'
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp'
import { useEffect, useState } from 'react'

const GoTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showScrollBtn = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showScrollBtn)

    return () => {
      window.removeEventListener('scroll', showScrollBtn)
    }
  }, [])

  return (
    <S.Wrapper showScroll={showScroll} title="Subir página">
      <KeyboardArrowUp onClick={goToTop} />
    </S.Wrapper>
  )
}

export default GoTop
