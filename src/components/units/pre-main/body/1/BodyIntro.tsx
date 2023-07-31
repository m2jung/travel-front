import * as S from './BodyIntro.styles'

export default function BodyIntro():JSX.Element {

    return(
      <S.Wrapper>
        <S.WrapperLeft>
          <S.PhoneImage style={{backgroundImage:`url('/images/phone.png')`}}/>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.PhoneBubble>
          </S.PhoneBubble>
        </S.WrapperRight>
   
      </S.Wrapper>
    )
}