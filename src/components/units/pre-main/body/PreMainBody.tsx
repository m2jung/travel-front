import BodyIntro from './1/BodyIntro'
import BodyImage from './2/BodyImage'
import BodyKeyword from './3/BodyKeyword';
import BodyMap from './4/BodyMap'
import BodyRoute from './5/BodyRoute';
import BodyMobile from './6/BodyMobile'
import * as S from './PreMainBody.styles'

export default function PreMainBody():JSX.Element {

    return(
        <S.Body>
            <BodyImage/>
            <BodyIntro/>
            <BodyKeyword/>
            <BodyMap/>
            <BodyRoute/>
            <BodyMobile/>
        </S.Body>
    )
}