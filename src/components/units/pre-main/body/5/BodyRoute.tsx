import * as S from './BodyRoute.styles'

export default function BodyRoute():JSX.Element {

    return(
      <S.Wrapper>
        <S.RouteTitle>동선 낭비 없는 최적의 경로</S.RouteTitle>
        <S.RouteSubTitle>🗒️ 코스마다 활동내역, 경비 등을 쉽고 빠르게 메모할 수 있어요!</S.RouteSubTitle>
        <S.RouteSection>
          <S.Section>
            <S.RouteImage src='./images/route.png'/>
          </S.Section>
          <S.Section>
            <S.RouteMemo>
              <S.MemoImage src='./images/memo.png'/>
            </S.RouteMemo>
          </S.Section>
        </S.RouteSection>
      </S.Wrapper>
    )
}