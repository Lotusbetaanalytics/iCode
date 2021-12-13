import React from 'react'
import styles from './styles.module.css'

import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className={styles.hero}>
            <Link to="/payment" className={`${styles.btn} ${styles.green}`}>Make Payment</Link>

        </div>
    )
}

export default Hero
