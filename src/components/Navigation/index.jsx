import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/developer.ico'

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" /></div>
        </div>
    )
}

export default Navigation
