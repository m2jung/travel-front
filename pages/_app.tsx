import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { Global } from '@emotion/react'
import { globalStyle } from "../src/commons/styles/globalStyles";
import { useMediaQuery } from "../src/components/commons/hooks/useMediaQuery";



// 모든 페이지가 합쳐지는 곳 
export default function App({ Component }: any): JSX.Element {

  // 반응형 Hook 
  const matches = useMediaQuery("(min-width: 600px)");

  return ( 
    <>
      <Global styles={globalStyle}/>
      <RecoilRoot>
      <CookiesProvider>
        <Component />
      </CookiesProvider>
      </RecoilRoot>
    </>
  );
}

