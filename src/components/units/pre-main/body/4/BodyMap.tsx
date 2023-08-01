import * as S from './BodyMap.styles'

export default function BodyMap():JSX.Element {

    return(
      <S.Wrapper>
        <S.MapTitle>구글지도 연동으로 더욱 쉬운 여행</S.MapTitle>
        <S.MapSubTitle>📌 즐겨찾기로 지역별 핵심 명소들을 한 눈에 볼 수 있어요!</S.MapSubTitle>
        <S.MapImage src='./images/map.png'/>
      </S.Wrapper>
    )
}