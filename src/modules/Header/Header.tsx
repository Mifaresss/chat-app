import React from 'react'
import styles from './Header.module.css'

const navItems = [
   { label: 'Новий чат', href: '/' },
   { label: 'Чат кімнати', href: '/' },
   { label: 'Підтримка', href: '/' },
]

function Header() {
   return <div className={styles.main}>Header</div>
}

export default Header
