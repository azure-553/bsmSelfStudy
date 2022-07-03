import styles from '../styles/main.module.css';
import {Link} from 'react-router-dom';

function Selfchoice() {
    return(
        <div className={styles.wrap}>
            <div className={styles.backBox}>
                <img className={styles.subImg} src='./sub.png'/>
                <button className={styles.applicationBtn}>
                    <Link to="/"><p>자습</p><p><span> 신청</span>하기</p></Link>
                </button>
                <button className={styles.cancelBtn}>
                    <Link to="/studentinfo"><p>자습</p><p><span> 취소</span>하기</p></Link>
                </button>
                <button className={styles.lookupBtn}>
                    <Link to="/studentinfo"><p>자습 </p><p><span> 조회</span>하기</p></Link> 
                </button>
            </div>
        </div>
      
    );
}

export default Selfchoice;