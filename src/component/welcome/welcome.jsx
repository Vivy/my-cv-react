import * as S from './welcome.style'

const Welcome= ({nameTitle, jobTitle}) => {
  return <S.Welcome>
    {nameTitle}{jobTitle}
  </S.Welcome>
}

export default Welcome
