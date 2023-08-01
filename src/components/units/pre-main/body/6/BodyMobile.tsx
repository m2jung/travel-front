import * as S from './BodyMobile.styles'

export default function BodyMobile():JSX.Element {

    return(
      <S.Wrapper>
        <S.MobileBanner>
          <S.BannerSection>
            <S.BannerText>최적의 여행지 <span>코스 추천</span></S.BannerText>
            <S.BannerText>다양한 키워드의 여행 <span>정보 공유</span> </S.BannerText>
            <S.BannerText>쉽고 빠른 여행 나만의 <span>일정 계획</span></S.BannerText>
            <S.BannerText>모바일에서도 만나보세요!</S.BannerText>
          </S.BannerSection>
          
          <S.BannerSection>
            <S.BannerImage src='./images/mobile.png'/>
          </S.BannerSection>
        </S.MobileBanner>
      </S.Wrapper>
    )
}