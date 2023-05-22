import { useNavigate } from 'react-router-dom';

// 토큰을 쿠키에 저장합니다.
function setToken(tokenValue: string) {
  document.cookie = `token=${tokenValue}; path=/`;
}

// 쿠키에 저장한 토큰 값을 반환합니다.
function getToken(): string | null {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    return key === 'token' ? value : null;
  }
  return null;
}

// 쿠키에 저장된 토큰을 삭제합니다.
function removeToken(): void {
  document.cookie = 'token=; expires=Sun, 01 Jan 2023 00:00:00 UTC; path=/;';
}

// 토큰이 더 이상 유효하지 않을 때 호출해주세요.
// function invalidToken() {
//   removeToken();
//   alert('로그인이 유효하지 않습니다.\n다시 로그인 해주세요.');
//   const navigate = useNavigate();
//   navigate('/');
// }

export { setToken, getToken, removeToken };
