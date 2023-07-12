import React from 'react'
import Navigation from '@/components/Navigation/Navigation'

import styles from './Header.module.css'

const navItems = [
	{ label: 'Новий чат', href: '/' },
	{ label: 'Чат кімнати', href: '/' },
	{ label: 'Підтримка', href: '/' },
]

function Header() {
	return (
		<div className={styles.main}>
			<Navigation />
		</div>
	)
}

export default Header
