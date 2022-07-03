import styles from '../styles/student.module.css';
import {Link} from 'react-router-dom';

function Student() {
    return(
        <div className={styles.wrap}>
        <div className={styles.backBox}>
            <img className={styles.subImg} src='./sub.png'/>
            <p>학번을 입력해주세요</p>
            <input type="text" placeholder="학번입력" className={styles.studentNumber}/>
            <button type="submit" className={styles.checkBtn}><Link to="/cancel">확인</Link></button>
        </div>
    </div>
    );
}

export default Student;