import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "./Sign-up-schema";
import styled from "styled-components";

interface IFormData {
  email: string,
  password: string,
  repassword: string,
  nicname: string,
}

export default function SignUpPage():JSX.Element{

    // 1. react-hook-form 사용 useForm() 함수
    // const { 입력요소 등록, submit함수, form상태 }
      const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema) , // 검증할 조건 yupResolver의 schema를 통해 검증 로직 실행
        mode: "onChange" // 어떤 mode를 할 때마다 에러문구를 띄울건지?
      });
    
    // 2. form submit() 데이터 잘 받아지는지 확인 
    const onClickSubmit = (data: IFormData):void => {
      console.log(data);
    }

    // 3. onChange()없이 데이터 받기 
    // state 없이 입력요소의 모든 데이터를 인자값으로 보냄 
    return (
        <>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          이메일 <input type="text" {...register("email")}/><br/>
          비밀번호<input type="password" {...register("password")}/><br/>
          비밀번호 확인<input type="password"{...register("repassword")}/><br/>
          닉네임 <input type="text" {...register("nicname")}/><br/>
        <button style={{backgroundColor : formState.isValid? "tomato" : "" }}> 회원가입</button>
        {/* button의 default 값은 submit이므로 form안에서는 type 명시를 안해줘도 된다. */}
        </form>
        </>
    )
    // isValid는 모두 만족하면? 이라는 뜻 
}




// import { useState } from "react"

// export default function SignUpPage(){
//     // 회원가입 
//     // 1. input value 변수 선언
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [repassword, setRePassword] = useState("");
//     const [nicname, setNicName] = useState("");

//     // 2. onChange() 
//     const onChangeEmail = (event)=> {
//       setEmail(event.currentTarget.value);
//     }
//     const onChangePassword = (event) => {
//       setPassword(event.currentTarget.value);
//     }
//     const onChangeRePassword = (event) => {
//       setRePassword(event.currentTarget.value);
//     }
//     const onChangeNicName = (event)=> {
//       setNicName(event.currentTarget.value);
//     }
    
//     // 3. Submit() 
//     const onClickSubmit = () => {
//       console.log('확인')
//     }
//     return (
//         <>
//         <form>
//           이메일 <input type="text" onChange={onChangeEmail}/><br/>
//           비밀번호<input type="password" onChange={onChangePassword}/><br/>
//           비밀번호 확인<input type="repassword" onChange={onChangeRePassword}/><br/>
//           닉네임 <input type="text" onChange={onChangeNicName}/><br/>
//         <button onClick={onClickSubmit}>회원가입</button>
//         {/* button의 default 값은 submit이므로 form안에서는 type 명시를 안해줘도 된다. */}
//         </form>
//         </>
//     )
// }