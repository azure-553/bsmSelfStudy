import React from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/cancel.module.css';

function Cancel() {
    return(
        <div className={styles.wrap}>
            <div className={styles.backBox}>
                <img className={styles.subImg} src='./sub.png'/>
                <p className={styles.ph1}>
                <div className={styles.bNum}></div><span className={styles.bNumNext}>실</span><div className={styles.sNum}></div><span className={styles.sNumNext}>자리</span>
                </p>
                <p className={styles.ph2}>
                <span className={styles.cancelCol}>취소</span>하시겠습니까?
                </p>
                <button className={styles.noBtn}><Link to="/">아니요</Link></button>
                <button className={styles.yesBtn}><Link to="/cancelresult">예</Link></button>
            </div>
        </div>
    );
}

export default Cancel;