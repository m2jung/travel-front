import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { access } from "fs";
import { useRecoilState } from "recoil";



export default function LoginPage():JSX.Element {

// 1.값을 저장, 보낼 변수 선언 
    const back = process.env.LOGIN_URI
    const router  = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies(['']);
    const [loginUser, setLoginUser] = useState('');

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
        
        // 3-1. 로그인 가능한 이메일,비번
        const data =  {
            "memberEmail": "a@b.com",
            "memberPw": "op1234"
        };

        // 3-2 API 요청 Token 값 가져온 후 변수에 담기 (withCredentials : refreshToken을 주고 받기 위함)
        await axios.post("https://git.walpie.com/jwt/login", data, {withCredentials: true})
            .then((res) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${res.data.accessToken}`;           
            console.log(res.data);
             
            if(res.data != undefined){
                const accessToken = res.data?.accessToken; // JWT(1h)
                const refreshToken = res.data?.refreshToken; // JWT(2w)
                setLoginUser('로그인 완료')
                router.push('login-success');
 
        // 3-3 백엔드로 받은 refreshToken 브라우저 쿠키에 저장 
        // refresh만 저장하고 새로운 accessToken을 받아 인증하면 CSRF 취약점 공격방어 가능
            if (refreshToken) {
                // ????? 쿠키에 계속 token이 쌓임
                setCookies(refreshToken, {
                path: "/", // 모든 경로에서 쿠키 사용
                secure: true, // HTTPS 연결을 통해서만 전송
                sameSite: "none", // 같은 사이트 내 요청, 모든 사이트 쿠키 허용
            });    
        }}
            
    })
            .catch((error) => {
                alert('로그인에 실패했습니다.')
            });
        };

// 4. accessToken 만료시 새로운 refreshToken 사용으로 accessToken 요청
        const onClickToken = async(): Promise<void> => {
            await axios.post ("https://git.walpie.com/jwt/silentRefresh",{withCredentials: true})
            .then((res) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${res.data.accessToken}`;           
            console.log(res.data);
        })
        
        }


    return  (
        <>
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인</button>
            <button onClick={onClickToken}>새토큰</button>
            {/* <span>{cookies? loginUser:''}</span> */}
        </>
    );
}