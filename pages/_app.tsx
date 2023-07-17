import { CookiesProvider } from "react-cookie";

// 모든 페이지가 합쳐지는 곳 
export default function App({ Component }: any): JSX.Element {
  return ( 
    <div>
      <CookiesProvider>
        <Component />
      </CookiesProvider>
    </div>
  );
}

