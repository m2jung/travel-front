import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { access } from "fs";
import { useRecoilState } from "recoil";
import { resultKeyNameFromField } from "@apollo/client/utilities";



export default function LoginPage():JSX.Element {

// 1.값을 저장, 보낼 변수 선언 
    const back = process.env.LOGIN_URI
    const router  = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies(['']);
    const [loginUser, setLoginUser] = useState(false);
    const [result, setResult] = useState({});

    // 로그인 가능한 이메일,비번
    const data =  {
      "memberEmail": "a@b.com",
      "memberPw": "op1234"
    };
    // 쿠키 만료 시간 지정
    const JWT_TIME_OUT = 5000; // 5초 



//  JWT recoil로 globalState 저장
// ?????????

// 2.onChange() 실행후 이메일,비밀번호 저장
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.currentTarget.value);
    }

// 3. onClickLogin() 로그인 API요청 응답 
    const onClickLogin = async():Promise<void> => {

        // 3-1 API 요청 Token 값 가져온 후 변수에 담기 (withCredentials : refreshToken을 주고 받기 위함)
        await axios.post("https://git.walpie.com/jwt/login", data, {withCredentials: true})
            .then((res) => {
        // 3-2 API로 받은 데이터가 있으면, access,refreshToken 저장 후 페이지 이동 
            if(res.data != undefined){
                const { accessToken, refreshToken } = res.data; //JWT저장
                // const accessToken = res.data?.accessToken; // JWT 저장
                // const refreshToken = res.data?.refreshToken; 
                  
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${res.data.accessToken}`     
            setResult({accessToken, refreshToken});
    
             
        // 3-3 refreshToken 브라우저 쿠키에 저장, 설정
        // refresh만 저장하고 새로운 accessToken을 받아 인증하면 CSRF 취약점 공격방어 가능
            if (refreshToken) {
                // ????? 쿠키에 계속 token이 쌓임
                // 쿠키 저장 설정값 지정 
                setCookies(refreshToken, {
                path: "/", // 모든 경로에서 쿠키 사용
                secure: true, // HTTPS 연결을 통해서만 전송
                sameSite: "none", // 같은 사이트 내 요청, 모든 사이트 쿠키 허용
                });        
            }
            // 5초 뒤에 로그인 연장 (refreshToken 재발급)
            setTimeout(TokenRefresh, JWT_TIME_OUT );            
        }
            })
            .catch((error) => {
                alert('로그인에 실패했습니다.')
            });
        };

    // 새토큰발급() 5초 뒤에 유지기간이 끝나고 실행
        const TokenRefresh = async(): Promise<void> => {
            // 3-1 API 요청 Token 값 가져온 후 변수에 담기 (withCredentials : refreshToken을 주고 받기 위함)
            await axios.post("https://git.walpie.com/jwt/login", data, {withCredentials: true})
            .then((res) => {
        // 3-2 API로 받은 데이터가 있으면, access,refreshToken 저장 후 페이지 이동 
            if(res.data != undefined){
                const { accessToken, refreshToken } = res.data; //JWT저장
                // const accessToken = res.data?.accessToken; // JWT 저장
                // const refreshToken = res.data?.refreshToken; 
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${res.data.accessToken}`     
            console.log('로그인 만료 - 새로운 토큰');
            setResult({accessToken, refreshToken});
            console.log(result);

            
        // 3-3 refreshToken 브라우저 쿠키에 저장, 설정
        // refresh만 저장하고 새로운 accessToken을 받아 인증하면 CSRF 취약점 공격방어 가능
            if (refreshToken) {
                // ????? 쿠키에 계속 token이 쌓임
                // 쿠키 저장 설정값 지정 
                setCookies(refreshToken, {
                path: "/", // 모든 경로에서 쿠키 사용
                secure: true, // HTTPS 연결을 통해서만 전송
                sameSite: "none", // 같은 사이트 내 요청, 모든 사이트 쿠키 허용
                });        
            }}
        })
      
    }


    return  (
        <>
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인</button>

        
        </>
    );
}