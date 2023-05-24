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
// Collection 불러오기
async function userCollection(page: number) {
  const params = `collection?page=${page}`;
  return await Api.get(domain, params);
}

// 결과 저장하기
async function saveIntoCollection(color: string, style: string, summary: string, result: string) {
  const data = {
    color,
    style,
    summary,
    result,
  };
  return await Api.post(domain, 'collection', data);
}

export { userLogin, userRegister, userCollection, saveIntoCollection };
