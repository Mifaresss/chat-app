'use client'
import s from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from '@/UI/NavLink/NavLink'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { toggleNavMenu } from '@/redux/toggleNavMenuSlice'

const navItems = [
	{ label: 'Новий чат', href: '/new-chat' },
	{ label: 'Чат кімнати', href: '/rooms' },
	{ label: 'Підтримка', href: '/support' },
]

interface NavigationPropsType {}

export function Navigation({}: NavigationPropsType) {
	const isOpen = useSelector((state: RootState) => state.toggleNavMenu.isOpen)
	const dispatch = useDispatch()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [isOpen])

	return (
		<nav className={[s.nav, isOpen && s.visible].join(' ')}>
			<ul className={s.navList}>
				{navItems.map(link =>
					<NavLink
						key={link.href}
						path={link.href}
						onClick={() => {
							if (isOpen) dispatch(toggleNavMenu(false))
						}}
					>
						{link.label}
					</NavLink>
				)}
			</ul>
		</nav>
	)
}
