import s from './NavLIst.module.css'
import { NavLink } from '@/UI/NavLink/NavLink'

const navItems = [
	{ label: 'Приватний чат', href: '/private-chat' },
	{ label: 'Чат кімнати', href: '/rooms' },
	{ label: 'Підтримка', href: '/support' },
]

interface NavListPropsType {
	isOpen?: boolean
	updateOpen?: () => void;
	highlight?: boolean
}

export function NavList({ isOpen, updateOpen, highlight }: NavListPropsType) {

	return (
		<ul className={s.navList}>
			{navItems.map(link =>
				<NavLink
					key={link.href}
					path={link.href}
					onClick={() => {
						if (isOpen && updateOpen) updateOpen()
					}}
					highlight={highlight}
				>
					{link.label}
				</NavLink>
			)}
		</ul>
	)
}
