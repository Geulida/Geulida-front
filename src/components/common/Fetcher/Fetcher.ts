import * as Api from './Api';

const port = 3000;
const domain = `http://34.64.112.254:${port}/api`;

// 로그인
async function userLogin(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };
  return await Api.post(domain, 'login', data, false);
}
// 회원 가입
async function userRegister(name: string, email: string, password: string) {
  const data = {
    name: name,
    email: email,
    password: password,
  };
  return await Api.post(domain, 'register', data, false);
}
// 결과 불러오기
async function userCollection() {
  return await Api.get(domain, 'collection');
}

export { userLogin, userRegister, userCollection };
