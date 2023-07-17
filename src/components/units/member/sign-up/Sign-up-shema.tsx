import * as yup from 'yup';

// yup => 유효성 검사 라이브러리
// 에러 문구 조건, 메세지 설정 
export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해주세요"),

  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호를 입력해주세요."),

  repassword: yup
  .string()
  .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
  .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
  .required("비밀번호를 입력해주세요."),
  
  nicname: yup
    .string()
    .matches(/^\d{3}-d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다.")
    .required("휴대폰은 번호를 입력해주세요."), //정규표현식, 매칭되는 문자열을 파악한다.

  });
