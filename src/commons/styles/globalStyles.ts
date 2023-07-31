import { css } from '@emotion/react';

// Global @emotion-react _app.tsx에 설정
export const globalStyle = css`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    // font-family 에 전역으로 사용 가능하게 저장
    @font-face {
        font-family: 'pre-font';
        src: url('/fonts/NotoSerifKR-Medium.otf');
    } 
    // 용량 ttf > woff , woff2
    
`

