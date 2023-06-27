import React from 'react';
import styles from './MessageContainer.module.scss';
import { ReactComponent as Bot } from 'assets/Bot.svg';

interface Message {
  id: number;
  content: string;
}

interface MessageContainerProps {
  aiMsg: Message[];
  userMsg: Message[];
  scrollRef: React.RefObject<HTMLDivElement>;
}

function MessageContainer({ aiMsg, userMsg, scrollRef }: MessageContainerProps) {
  return (
    <div className={styles.messageContainer} ref={scrollRef}>
      {aiMsg.map((message, index) => (
        <div key={message.id} className={styles.msgWrapper}>
          <p>
            <Bot />
            그리다 AI
          </p>
          <div className={styles.aiMsg}>{message.content}</div>
          {userMsg[index] && <div className={styles.userMsg}>{userMsg[index].content}</div>}
        </div>
      ))}
    </div>
  );
}

export default MessageContainer;
