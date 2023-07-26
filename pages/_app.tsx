import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { Global } from '@emotion/react'
import { globalStyle } from "../src/commons/styles/globalStyles";

// 모든 페이지가 합쳐지는 곳 
export default function App({ Component }: any): JSX.Element {
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

