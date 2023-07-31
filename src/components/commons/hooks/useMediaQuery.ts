import { match } from "assert"
import { useState, useEffect } from "react"

// useMediaQuery Hook 페이지 화면의 크기  - 1)감지
export function useMediaQuery(query: string): any {
    const getMatches = (query: string): boolean => {
        // SSR issue 방지 (화면 크기를 조건문으로  - 2)확인한다.)
        if(typeof window !== 'undefined') {
            return window.matchMedia(query).matches
        }
        return false
    }

    // boolean 타입의 화면크기 값 담을 state 만들고 change 이벤트시 boolean 타입으로 저장  
    const [ matches, setMatches ] = useState<boolean>(getMatches(query))
    function handleChange() {
        setMatches(getMatches(query))
    }

    // 2) query로 가져온 화면 크기 감지될 때마다 렌더링 
    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        // 화면 크기 저장 함수 호출
        handleChange()

        // 조건문 Event 감지 (렌더링 시점을 알 수 있도록 useEffect안에서 사용해야 한다.)
        // 밑에 조건문 함수가 꼭 필요한가???????
        // addEventListener를 통해 이벤트를 등록하고 난 뒤 이벤트 등록을 해제해주지 않으면, 계속해서 이벤트를 감지하기 때문에 성능 저하를 일으킬 수 있다. 그러므로 컴포넌트가 언마운트 될 때 꼭 이벤트 등록을 해제해주어야 한다.
        if(matchMedia.addListener) {
            matchMedia.addListener(handleChange)
        } else {
            matchMedia.addEventListener('change', handleChange)
        }
        
        return () => {
            if( matchMedia.removeListener) {
                matchMedia.removeListener(handleChange)
            } else {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    },[query])

    return matches;
    // true? PC모드 false? Mobile모드  반환 

}


