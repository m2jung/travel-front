import { useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import * as S from './PreMainHeader.styled'
import useObserver from '../../../commons/hooks/customs/useObserver';
// import { opacityVariants } from '../../../commons/styles/animation';

export default function PreMainHeaderTop(props: any):JSX.Element {
      
  const router = useRouter();
  const onClickBtn = () => {
    // transition 
    router.push('./main');
  }

  // const { ref, animation } = useObserver();


  return (
    <>
     <S.Header>
      <S.BackImage style={{backgroundImage: `url('/images/background.png')`}}>
        <S.Start>
         <S.StartBtn onClick={onClickBtn}/>
         <S.StartText>여행 시작하기</S.StartText> 
        </S.Start>
        <S.Title
            // ref={ref}
            // initial="hidden"
            // animate={animation}
            // variants={opacityVariants}
            >
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