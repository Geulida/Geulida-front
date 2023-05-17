import React, { useState, useEffect, useRef } from 'react';
import styles from './chatPage.module.scss';
import Layout from 'components/common/Layout';
import { ReactComponent as Send } from 'assets/Send.svg';

interface Message {
  id: number;
  content: string;
}

function ChatPage() {
  const [count, setCount] = useState<number>(0);
  const [userMsg, setUserMsg] = useState<Message[]>([]);
  const [aiMsg, setAiMsg] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // 최대 대화 가능 횟수
  const maxCount = 10;

  // 진행bar 동적으로 width 설정
  const progressBarWidth = `${(count / maxCount) * 600}px`;

  // 보내기 버튼 클릭 이벤트
  function handleClick() {
    setIsDisabled(true);
    if (inputValue.trim() !== '' && count < maxCount) {
      const newMessage: Message = {
        id: userMsg.length + 1,
        content: inputValue
      };
      setUserMsg([...userMsg, newMessage]);
      setInputValue('');
    }
  }

  // 진행도 설정
  useEffect(() => {
    if (count < maxCount) {
      setCount(userMsg.length);
    } 
  }, [count, userMsg.length]);

  // AI의 응답 생성 및 추가
  useEffect(() => {
    if (userMsg.length === aiMsg.length && aiMsg.length > 0) {
      setIsDisabled(true);
      // 임시로 2초 후에 보내기 (disabled 확인용)
      setTimeout(() => {
        setAiMsg(() => {
          const newAiMessage = [...aiMsg];
          newAiMessage.push({
            id: aiMsg.length + 1,
            content: generateAiResponse()
          });
          return newAiMessage;
        });

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

  // AI의 응답 받아오기
  function generateAiResponse() {
    return "AI 대답을 여기에 저장해서 보여주기!!";
  }

  return (
    <Layout>
      <div className={styles.mainContainer}>

        <div className={styles.countContainer}>
          <p className={styles.countText}>남은 대화 턴 수 ({count}/{maxCount})</p>
          <div className={styles.progressBar}>
            <div className={styles.countingBar} style={{ width: progressBarWidth }}></div>
          </div>
        </div>

        <div className={styles.chatContainer}>

        <div className={styles.messageContainer}>
          {aiMsg.map((message, index) => (
            <div key={message.id} className={styles.msgWrapper}>
              <p>&#x1F916; 그리다 AI</p>
              <div className={styles.aiMsg}>{message.content}</div>
              {userMsg[index] && (
                <div className={styles.userMsg}>{userMsg[index].content}</div>
              )}
            </div>
          ))}
        </div>

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