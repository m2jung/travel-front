import ReactPlayer from 'react-player'
import * as S from './BodyImage.styles'


export default function BodyImage():JSX.Element {

    return(
      <S.Wrapper>
       <ReactPlayer url={'./videos/vlog.mp4'}
        playing={true}
        muted={true}
        controls={false}
        loop={true}
       />
      </S.Wrapper>
    )
}