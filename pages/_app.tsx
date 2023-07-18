import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

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

