import styles from './Navi.module.scss';
import { ReactComponent as Chat } from 'assets/Chat.svg';
import { ReactComponent as Signup } from 'assets/Signup.svg';
import { ReactComponent as Login } from 'assets/Login.svg';

function Navi() {
  return (
    <div className={styles.nav}>
      <nav>
        <div>
          <Chat className={styles.btn} />
        </div>
        <div>
          <div>
            <Signup className={`${styles.btn} ${styles.top}`} />
          </div>
          <div>
            <Login className={styles.btn} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
