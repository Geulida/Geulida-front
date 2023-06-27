import * as Api from './api';

const domain = process.env.REACT_APP_SERVER_DOMAIN as string;

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

// Chat 생성하기
async function generateChat(message: string) {
  const data = {
    message: message,
  };
  return await Api.post(domain, 'chat', data, true);
}

// 마지막 요약 문장
async function summaryChat(message: string) {
  const data = {
    message: message,
  };
  return await Api.post(domain, 'chat/last', data, true);
}

// 이미지 생성하기
async function makeImage(color: string, style: string, summary: string) {
  const data = {
    color: color,
    style: style,
    summary: summary,
  };
  return await Api.post(domain, 'img', data, true);
}

export { userLogin, userRegister, userCollection, saveIntoCollection, generateChat, summaryChat, makeImage };
