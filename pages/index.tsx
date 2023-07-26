import { useRouter } from "next/router";
import { useEffect } from "react";

// export : 브라우저 화면에 내보냄
// 처음 보여지는 화면 
export default function Home() {
  
  // useEffect() 렌더링 후 한번만 실행.(반복 렌더링을 하지 않는다)
  const router = useRouter();
  
  useEffect(()=>{
    router.push("/pre-main")
  },[]);

  return (
    <>
     
    </>
  );
}
