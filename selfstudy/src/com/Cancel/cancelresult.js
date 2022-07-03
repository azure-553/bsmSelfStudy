import styles from '../styles/cancelresult.module.css';
import {Link} from 'react-router-dom'; 

function Cancelreault() {
    return(
        <div className={styles.wrap}>
            <div className={styles.backBox}>
                <img className={styles.subImg} src='./sub.png'/>
                <div className={styles.nBox}>
                    <p className={styles.nTitle}>자습실 신청이 <span>취소</span>되셨습니다.</p>
                    <ul className={styles.nText}>
                        <li>자습실 이용시간은 9:30 ~ 10:30분 입니다.</li>
                        <li>신청 후 출석 하지 않을 경우 경고 1회 입니다.</li>
                        <li>본인확인을 위해 학생증 지참을 부탁드리며, 미지참시 입실이 불가합니다.</li>
                        <li>심각한 고성방가를 일으킬시, 벌점 1점 및 퇴실조치 취하도록 하겠습니다.</li>
                    </ul>
                </div>
                <Link to="/"><button type='submit' className={styles.bBtn}>확인</button></Link>
            </div>
        </div>
    );

}

export default Cancelreault;