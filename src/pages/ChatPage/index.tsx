import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './chatPage.module.scss';
import Layout from 'components/common/Layout';
import ProgressBar from './ProgressBar';
import MessageContainer from './MessageContainer';
import InputContainer from './InputContainer';
import Loading from './Loading';

export interface Message {
  id: number;
  content: string;
}

function ChatPage() {
  const [count, setCount] = useState<number>(0);
  const [userMsg, setUserMsg] = useState<Message[]>([]);
  const [aiMsg, setAiMsg] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // 최대 대화 가능 횟수
  const maxCount = 10;

  // 유저 메세지 입력 이벤트
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  };

  // 유저 메세지 보내기 버튼 클릭 이벤트
  function handleClick() {
    if (inputValue.trim() !== '' && count < maxCount) {
      setIsDisabled(true);
      setUserMsg(() => {
        const newUserMessage = [...userMsg];
        newUserMessage.push({
          id: userMsg.length + 1,
          content: inputValue
        });
        return newUserMessage;
      })
      setInputValue('');
    }
  }

  // AI 응답 저장
  function handleAddAiResponse(message: string) {
    setAiMsg(() => {
      const newAiMessage = [...aiMsg];
      newAiMessage.push({
        id: aiMsg.length + 1,
        content: message
      });
      return newAiMessage;
    });
  }

  // AI의 응답 받아오기
  function generateAiResponse() {
    return 'AI 대답을 여기에 저장해서 보여주기!!';
  }

  // AI 대화 요약 받아오기
  function summaryAiResponse() {
    return '마지막 요약 문장이지롱';
  }

  // 이미지 저장
  function generateImageUrl() {
    return '나중에 받아올 이미지 여기에 저장하기';
  }

  // 마지막 AI 메세지(summary), 이미지 url 세션 스토리지에 저장
  function handleLastMessage() {
    const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
    const answerData = { 
      ...getAnswerData, 
      summary: summaryAiResponse(),
      url : generateImageUrl(),
    };

    sessionStorage.setItem('answerData', JSON.stringify(answerData));
  }

  // 진행도 설정
  useEffect(() => {
    if (count < maxCount) {
      setCount(userMsg.length);
    } 
  }, [count, userMsg.length]);

  // AI의 응답 생성 및 추가
  useEffect(() => {
    // 임시로 2초 후에 보내기 (disabled 확인용)
    if (userMsg.length === aiMsg.length) {
      setTimeout(() => {
        handleAddAiResponse(generateAiResponse());
        setIsDisabled(false);
      }, 2000);
    }

    // 마지막 요약 문장 추가
    if (userMsg.length === maxCount && aiMsg.length === maxCount) {
      setTimeout(() => {
        handleAddAiResponse(summaryAiResponse());
        setShowSpinner(true);
        setIsDisabled(true);
        handleLastMessage();
      }, 2000);
    }
  }, [userMsg, aiMsg]);

  // 스크롤 위치 최신 대화에 맞도록
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [userMsg, aiMsg]);

  // 시작 전 세션 스토리지 값 유효한지
  useEffect(() => {
    if (!sessionStorage.getItem('answerData')) {
      alert('먼저 원하는 컬러와 화풍을 선택해주세요!');
      navigate('/color-pick');
    }
  }, []);

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <ProgressBar 
          count={count} 
          maxCount={maxCount}
        />
        <div className={styles.chatContainer}>
          {showSpinner && <Loading />}
          <MessageContainer 
            aiMsg={aiMsg} 
            userMsg={userMsg} 
            scrollRef={scrollRef}
          />
          <InputContainer
            inputValue={inputValue}
            isDisabled={isDisabled}
            handleInputChange={handleInputChange}
            handleClick={handleClick}
          />
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;