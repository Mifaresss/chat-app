'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

const navItems = [
   { label: 'Новий чат', href: '/' },
   { label: 'Чат кімнати', href: '/blog' },
   { label: 'Підтримка', href: '/support' },
]

function Navigation() {
	const pathname = usePathname()
	return (
		<div className={styles.navWrapper}>
			{navItems.map(link => {
				const isActive = pathname === link.href
				return (
					<Link href={link.href} key={link.href} className={isActive ? styles.active : styles.link}>
						{link.label}
					</Link>
				)
			})}
		</div>
	)
}
export default Navigation
