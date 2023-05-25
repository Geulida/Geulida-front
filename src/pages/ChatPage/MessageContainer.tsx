import React from 'react';
import styles from './chatPage.module.scss';
import { Message } from './index';

interface MessageContainerProps {
  aiMsg: Message[];
  userMsg: Message[];
  scrollRef: React.RefObject<HTMLDivElement>;
}

function MessageContainer ({ aiMsg, userMsg, scrollRef }: MessageContainerProps) {
  return (
    <div className={styles.messageContainer} ref={scrollRef}>
      {aiMsg.map((message, index) => (
        <div key={message.id} className={styles.msgWrapper}>
          <p>🤖 그리다 AI</p>
          <div className={styles.aiMsg}>{message.content}</div>
          {userMsg[index] && (
            <div className={styles.userMsg}>{userMsg[index].content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;