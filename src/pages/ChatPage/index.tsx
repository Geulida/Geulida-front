import React, { useState, useEffect, useRef } from 'react';
import styles from './chatPage.module.scss';
import Layout from 'components/common/Layout';
import { ReactComponent as Send } from 'assets/Send.svg';
import ProgressBar from './ProgressBar';
import MessageContainer from './MessageContainer';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  // 최대 대화 가능 횟수
  const maxCount = 10;

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

  // AI의 응답 받아오기
  function generateAiResponse() {
    return "AI 대답을 여기에 저장해서 보여주기!!";
  }

  // AI의 응답 생성 및 추가
  useEffect(() => {
    if (userMsg.length === aiMsg.length && aiMsg.length > 0) {
      setIsDisabled(true);
      // 임시로 2초 후에 보내기 (disabled 확인용)
      setTimeout(() => {
        setAiMsg((prevAiMessages) => [
          ...prevAiMessages,
          {
            id: prevAiMessages.length + 1,
            content: generateAiResponse()
          }
        ]);

        // 마지막 AI 응답을 받은 후 입력창 막기
        if (maxCount <= aiMsg.length) {
          setIsDisabled(true);
        } else {
          setIsDisabled(false);
        }

      }, 2000);
    }
  }, [userMsg, aiMsg]);

  // 페이지가 시작되면 AI의 첫 번째 대화를 생성하여 보여줌
  useEffect(() => {
    const firstAiMessage: Message = {
      id: 1,
      content: "안녕 난 첫번째 메시지야"
    };
    setAiMsg([firstAiMessage]);
    setIsDisabled(false);
  }, []);

  // 스크롤 위치 최신 대화에 맞도록
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [userMsg, aiMsg]);

  return (
    <Layout>
      <div className={styles.mainContainer}>

        <ProgressBar 
          length={userMsg.length} 
          count={count} 
          setCount={setCount} 
          maxCount={maxCount}/>

        <div className={styles.chatContainer}>

          <MessageContainer 
            aiMsg={aiMsg} 
            userMsg={userMsg} 
            scrollRef={scrollRef}/>

          <div className={styles.inputCotainer}>
            <input
              className={styles.input}
              placeholder='메시지를 입력하세요 (최대 500자까지 작성할 수 있습니다)'
              type="text"
              value={inputValue}
              maxLength={500}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isDisabled}
            />

            <button 
              className={styles.button}
              onClick={handleClick}
              disabled={isDisabled}
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;