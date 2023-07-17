import { Cookies } from "react-cookie";
import axios from "axios";
export default function LoginSuccessPage():JSX.Element {

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
          <span>{Cookies? "로그인성공": ""}</span>
          <button onClick={onClickToken}>새토큰</button>
        </>
    );
}