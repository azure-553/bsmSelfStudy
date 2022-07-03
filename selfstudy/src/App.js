import React from "react";
import styles from './com/styles/app.module.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrap}>
      <div className={styles.backBox}>
            <img className={styles.mainImg} src='./main.png'/>
            <button className={styles.startBtn}>
              <span>✨BSSM-자습실 신청✨</span>
              <Link to="/selfchoice"><p>시작하기</p></Link>
            </button>
        </div>
    </div>
  );
}

export default App;
