// 토큰을 로컬스토리지에 저장합니다.
function setToken(tokenValue: string) {
  localStorage.setItem('token', tokenValue);
}

// 로컬스토리지에 저장한 토큰 값을 반환합니다.
function getToken(): string | null {
  return localStorage.getItem('token');
}

// 로컬스토리지에 저장된 토큰을 삭제합니다.
function removeToken(): void {
  localStorage.clear();
}

export { setToken, getToken, removeToken };
