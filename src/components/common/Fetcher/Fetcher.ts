import * as Api from './Api';

const domain = `https://port-0-geulida-back-lhe2bli1h434z.sel4.cloudtype.app/api`;

interface data {
  color: string;
  hexcode: string;
  style: string;
  summary: string;
  url: string;
}

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
async function saveIntoCollection(data: data) {
  return await Api.post(domain, 'collection', data);
}

export { userLogin, userRegister, userCollection, saveIntoCollection };
