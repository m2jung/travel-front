import { CookiesProvider } from "react-cookie"; // CookieToken
import { RecoilRoot } from "recoil"; // 상태관리라이브러리 globalState

// 모든 페이지가 합쳐지는 곳 
export default function App({ Component }: any): JSX.Element {
  return ( 
    <div>
      <RecoilRoot>
        <CookiesProvider>
          <Component />
        </CookiesProvider>
      </RecoilRoot>
    </div>
  );
}

