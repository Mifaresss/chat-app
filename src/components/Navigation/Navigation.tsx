import s from './Navigation.module.css'
import { NavLink } from '@/UI/NavLink/NavLink'

const navItems = [
	{ label: 'Новий чат', href: '/new-chat' },
	{ label: 'Чат кімнати', href: '/rooms' },
	{ label: 'Підтримка', href: '/support' },
]

interface NavigationPropsType {
	type: 'header' | 'footer'
}

export function Navigation({ type }: NavigationPropsType) {

	return (
		<nav className={s.nav}>
			<ul className={type === 'header' ? s.navList : s.navList}>
				{navItems.map(link =>
					<NavLink key={link.href} path={link.href}>
						{link.label}
					</NavLink>
				)}
			</ul>
		</nav>
	)
}
