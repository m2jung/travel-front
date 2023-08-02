import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 화면 스크롤시 요소가 보일때 animation효과 hook 
const useObserver = () => {
    const animation = useAnimation();
    const { ref, inView } = useInView(); // ref(가시성 감지,적용) inView(화면에 가시적으로 보이는지 boolean값)
    // ref,inView 에 변화가 있을 때마다 렌더링후 변화값 반환
    useEffect(()=> {
        if(inView) {
            animation.start("visible");
        }else {
            animation.start("hidden");
        }
    },[animation, inView]);
    return {ref, animation}
}

export default useObserver;