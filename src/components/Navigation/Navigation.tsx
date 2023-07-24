'use client'
import { useState, useEffect } from 'react'
import { NavLink } from '@/UI/NavLink/NavLink'
import { usePathname } from 'next/navigation'

import s from './Navigation.module.css'

const navItems = [

	{ label: 'Новий чат', href: '/' },
	{ label: 'Чат кімнати', href: '/blog' },
	{ label: 'Підтримка', href: '/support' },

]

function Navigation({ type }:{type: string}) {
	const [isAuthPopUp, setIsAuthPopUp] = useState(false)
	const [size, setSize] = useState(window.innerWidth)

	const updateWindowWidth = () => setSize(window.innerWidth)

	useEffect(()=>{
		window.addEventListener('resize', updateWindowWidth)
		return () => window.removeEventListener('resize', updateWindowWidth)
	})

	const pathname = usePathname()
	return (
		<ul className={type === 'header' ? s.navHederWrapper : s.navFooterWrapper}>
			{navItems.map(link => {
				const isActive = pathname === link.href
				console.log(isActive)
				return (
					<NavLink key={link.href} className={isActive ? s.active : s.link} path={link.href}>
						{link.label}
					</NavLink>
				)
			})}
		</ul>
	)
}
export default Navigation
