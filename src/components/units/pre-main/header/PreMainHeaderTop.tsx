import * as S from './PreMainHeader.styled'

export default function PreMainHeaderTop():JSX.Element {

  return (
    <>
     <S.Header>
      <S.BackImage style={{backgroundImage: `url('/images/background.png')`}}>
        <S.Start>
         <S.StartWeb/>여행 시작하기
        </S.Start>
        <S.Title>
                떠나고 싶을 때,<br/>
                나를 아는 여행 플래너 <br/>
                떠플
        </S.Title>
        <S.StartMobile>
          <S.MobileText>모바일<br/>바로가기</S.MobileText>
        </S.StartMobile>    
      </S.BackImage>
     </S.Header> 
    </>
  );

    
}