import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChatPage.module.scss';
import Layout from 'components/common/Layout';
import Modal from 'components/common/Modal';
import ProgressBar from '../components/chat/ProgressBar';
import MessageContainer from '../components/chat/MessageContainer';
import InputContainer from '../components/chat/InputContainer';
import Loading from '../components/chat/Loading';
import { generateChat, summaryChat, makeImage } from 'api/fetcher';

interface Message {
  id: number;
  content: string;
}

interface data {
  color: string;
  hexcode: string;
  style: string;
  summary: string;
  url: string;
}

function ChatPage() {
  const [count, setCount] = useState<number>(0);
  const [userMsg, setUserMsg] = useState<Message[]>([]);
  const [aiMsg, setAiMsg] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [storedData, setStoredData] = useState<data>({
    color: '',
    hexcode: '',
    style: '',
    summary: '',
    url: '',
  });

  const navigate = useNavigate();

  // 최대 대화 가능 횟수
  const MAX_COUNT = 3;

  // 모달 핸들 함수
  function handleModalShow() {
    setShowModal((prev) => !prev);
  }

  // 유저 메세지 입력 이벤트
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // 유저 메세지 보내기 버튼 클릭 이벤트
  function handleClick() {
    if (inputValue.trim() !== '' && count < MAX_COUNT) {
      setIsDisabled(true);
      setUserMsg(() => {
        const newUserMessage = [...userMsg];
        newUserMessage.push({
          id: userMsg.length + 1,
          content: inputValue,
        });
        return newUserMessage;
      });
      setInputValue('');
    }
  }

  // AI 응답 저장
  function handleAddAiResponse(message: string) {
    setAiMsg(() => {
      const newAiMessage = [...aiMsg];
      newAiMessage.push({
        id: aiMsg.length + 1,
        content: message,
      });
      return newAiMessage;
    });

    if (userMsg.length === MAX_COUNT && aiMsg.length === MAX_COUNT) {
      setIsDisabled(true);
      setShowSpinner(true);
    } else {
      setIsDisabled(false);
    }
  }

  // 사용자 대화와 AI 대화를 번갈아가며 누적하여 문자열로 생성
  function totalMessage() {
    let totalMsg = '';

    for (let i = 0; i < userMsg.length; i++) {
      totalMsg += `AI: ${aiMsg[i].content}\n`;
      totalMsg += `USER: ${userMsg[i].content}\n`;
    }

    return totalMsg;
  }

  // AI의 응답 받아오기
  async function generateAiResponse() {
    try {
      console.log(totalMessage());

      const getTotalMsg = totalMessage();
      const aiResponse = (await generateChat(getTotalMsg)) as { message: string };
      const formattedAiResponse = aiResponse.message.replace(/AI: /g, '');

      console.log(aiResponse);
      handleAddAiResponse(formattedAiResponse);
    } catch (error) {
      console.error('메세지 요청 에러');
    }
  }

  // AI 대화 요약 받아오기
  async function summaryAiResponse() {
    try {
      console.log(totalMessage());

      const getTotalMsg = totalMessage();
      const lastAiResponse = (await summaryChat(getTotalMsg)) as { message: string };
      const formattedAiResponse = lastAiResponse.message.replace(/AI: /g, '');

      console.log('마지막 대화' + formattedAiResponse);
      handleAddAiResponse('To sum up your conversation,\n' + formattedAiResponse);

      return formattedAiResponse;
    } catch (error) {
      console.error('마지막 요약 메세지 요청 에러');
    }
  }

  // 이미지 url 받아오기
  async function generateImageUrl() {
    try {
      // hexcode 추가되어야 함
      const { color, style } = storedData;
      const summaryResponse = (await summaryAiResponse()) as string;
      const image = (await makeImage(color, style, summaryResponse)) as { url: string };

      console.log(image);

      setStoredData((prevData) => ({
        ...prevData,
        summary: summaryResponse,
        url: image.url,
      }));

      const answerData = { ...storedData, summary: summaryResponse, url: image.url };
      sessionStorage.setItem('answerData', JSON.stringify(answerData));

      navigate('/result');
    } catch (error) {
      console.error('이미지 요청 에러');
    }
  }

  // 처음에 세션 스토리지 값 유효한지
  useEffect(() => {
    try {
      const getAnswerData = JSON.parse(sessionStorage.getItem('answerData') || '');
      setStoredData((prevData) => ({
        ...prevData,
        color: getAnswerData.color,
        hexcode: getAnswerData.hexcode,
        style: getAnswerData.style,
      }));
    } catch (err) {
      handleModalShow();
    }
  }, []);

  // 페이지가 시작되면 AI의 첫 번째 대화를 생성하여 보여줌
  useEffect(() => {
    const firstAiMessage: Message = {
      id: 1,
      content: 'How was your day today?',
    };
    setAiMsg([firstAiMessage]);
    setIsDisabled(false);
  }, []);

  // 진행도 설정
  useEffect(() => {
    if (count < MAX_COUNT) {
      setCount(userMsg.length);
    }
  }, [count, userMsg.length]);

  // AI의 응답 생성 및 추가
  useEffect(() => {
    const isNullAnswerData = storedData.color === '' || storedData.hexcode === '' || storedData.style === '';

    if (userMsg.length === aiMsg.length && !isNullAnswerData && userMsg.length !== MAX_COUNT) {
      generateAiResponse();
    } else if (userMsg.length === MAX_COUNT && aiMsg.length === MAX_COUNT) {
      generateImageUrl();
    }
  }, [userMsg, aiMsg, storedData]);

  // 스크롤 위치 최신 대화에 맞도록
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [userMsg, aiMsg]);

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {showModal && (
          <Modal
            modalType='navigate'
            modalHandler={handleModalShow}
            modalMessage='원하는 컬러와 화풍을 선택해주세요'
            navigateHandler={() => {
              navigate('/color-pick');
            }}
          />
        )}
        <ProgressBar count={count} maxCount={MAX_COUNT} />
        <div className={styles.chatContainer}>
          {showSpinner && <Loading />}
          <MessageContainer aiMsg={aiMsg} userMsg={userMsg} scrollRef={scrollRef} />
          <InputContainer inputValue={inputValue} isDisabled={isDisabled} handleInputChange={handleInputChange} handleClick={handleClick} />
        </div>
      </div>
    </Layout>
  );
}

export default ChatPage;
