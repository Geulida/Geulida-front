import { useState } from 'react';
import styles from './Signup.module.scss';
import Button from 'components/common/Button/Button';
import Headline from 'components/common/Headline';
import SignupInput from './SignupInput';

function Signup() {
  // 필드 초기값 세팅
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // 오류 메세지 상태 세팅
  const [nameError, setNameError] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  // 유효성 검사 상태 세팅
  const [isValidatedName, setIsValidatedName] = useState(false);
  const [isValidatedId, setIsValidatedId] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isValidatedPasswordCheck, setIsValidatedPasswordCheck] = useState(false);

  // 이름 유효성 검사 함수
  const handleValidateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || !/^[가-힣]+$/.test(currentName) || currentName.includes(' ')) {
      setNameError('이름은 2글자 이상, 공백 없이 한글로 입력해주세요.');
      setIsValidatedName(true);
    } else {
      setNameError('');
      setIsValidatedName(false);
    }
  };

  const handleValidateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentId = e.target.value;
    setId(currentId);
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(currentId)) {
      setIdError('이메일 형식에 맞지 않습니다.');
      setIsValidatedId(true);
    } else {
      setIdError('');
      setIsValidatedId(false);
    }
  };

  const handleValidatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

    if (!passwordRegex.test(currentPassword)) {
      setPasswordError('비밀번호는 6자 이상, 20자 이하의 숫자와 영문자 조합이어야 합니다.');
      setIsValidatedPassword(true);
    } else {
      setPasswordError('');
      setIsValidatedPassword(false);
    }
  };

  const handleValidatePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPasswordCheck = e.target.value;
    // setPasswordCheck(currentPasswordCheck);

    if (currentPasswordCheck !== password) {
      setPasswordCheckError('패스워드가 일치하지 않습니다.');
      setIsValidatedPasswordCheck(true);
    } else {
      setPasswordCheckError('');
      setIsValidatedPasswordCheck(false);
    }
  };

  const isValidated = isValidatedName && isValidatedId && isValidatedPassword && isValidatedPasswordCheck;
  return (
    <div className={styles.container}>
      <Headline title='Signup' />
      <div className={styles.form}>
        <SignupInput type='text' name='userName' text='이름' onChange={handleValidateName} error={nameError} />
        <SignupInput type='email' name='userId' text='ID' placeholder='example@gmail.com' onChange={handleValidateId} error={idError} />
        <SignupInput type='password' name='userPassword' text='비밀번호' placeholder='영문자+숫자, 6자부터 20자까지' onChange={handleValidatePassword} error={passwordError} />
        <SignupInput type='password' name='userPasswordCheck' text='비밀번호 확인' onChange={handleValidatePasswordCheck} error={passwordCheckError} />
        <Button value='회원가입' type='submit' disabled={!isValidated} />
      </div>
    </div>
  );
}

export default Signup;
