import * as S from './BodyKeyword.styles'

export default function BodyKeyword():JSX.Element {

    return(
      <S.Wrapper>
        <S.KeywordTitle> #키워드로 #내가원하는 #다양한컨셉 #방문지검색 </S.KeywordTitle>
        <S.KeywordSection>
          <S.Section>
            <S.Image src='./images/key1.png'/>
            <S.HashTag>#군산1박2일#전주혼자당일치기</S.HashTag>
          </S.Section>
          <S.Section>
            <S.Image src='./images/key2.jpg'/>  
            <S.HashTag>#밀크티맛집#약과맛집</S.HashTag>
          </S.Section>
          <S.Section>
            <S.Image src='./images/key3.png'/>
            <S.HashTag>#익산애견동반식당#애견놀이터</S.HashTag>
          </S.Section>
          <S.Section>
            <S.Image src='./images/key4.png'/>
            <S.HashTag>#고양이천국#고양이정원</S.HashTag>
          </S.Section>
        </S.KeywordSection>
      </S.Wrapper>
    )
}