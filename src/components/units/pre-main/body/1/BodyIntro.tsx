import * as S from './BodyIntro.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import {faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons'

export default function BodyIntro():JSX.Element {

  // ..Icon 으로 객체의 모든 속성 포함
  const Icon = {
    fontSize:'35px' 
  }
    return(
      <S.Wrapper>
        <S.WrapperLeft>
          <S.PhoneImage style={{backgroundImage:`url('/images/phone.png')`}}/>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.PhoneBubble>
            <S.BubbleText>🤔 첫 가족휴가인데 어디가 좋을까?</S.BubbleText>
            <S.BubbleText>😰 계획은 짜야되는데 좀 막막하네...</S.BubbleText>
            <S.BubbleText>💸 10만원으로 1박2일 여행 다녀올 수 있을까?</S.BubbleText>
          </S.PhoneBubble>
          <S.PhoneSummary>
              <FontAwesomeIcon icon={faLocationDot} style={{ ...Icon, color: 'red' }}/>
              <S.Summary>
                구글 지도맵 연동으로 <br/>
                더욱 쉽고 빠른 경로 파악
              </S.Summary>
          </S.PhoneSummary>
          <S.PhoneSummary>
             <FontAwesomeIcon icon={faCalendarCheck} style={{ ...Icon, color: 'green', fontSize:'30px' }}/>
              <S.Summary>
                경로 별 일정 메모 기능 <br/>
                효율적인 여행 스케쥴 관리 
              </S.Summary>
          </S.PhoneSummary>
          <S.PhoneSummary>
              <FontAwesomeIcon icon={faSuitcaseRolling} style={{ ...Icon, color: 'brown' }} />
               <S.Summary>
                나에게 꼭 맞는 여행 검색 <br/>
                여행지 및 다양한 정보 추천
               </S.Summary>
          </S.PhoneSummary>
        </S.WrapperRight>
   
      </S.Wrapper>
    )
}