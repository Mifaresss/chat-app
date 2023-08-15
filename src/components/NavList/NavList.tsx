import s from './NavLIst.module.css'
import { NavLink } from '@/UI/NavLink/NavLink'

const navItems = [
	{ label: 'Новий чат', href: '/new-chat' },
	{ label: 'Чат кімнати', href: '/rooms' },
	{ label: 'Підтримка', href: '/support' },
]

interface NavListPropsType {
	isOpen?: boolean
	updateOpen?: () => void;
}

export function NavList({ isOpen, updateOpen }: NavListPropsType) {

	return (
		<ul className={s.navList}>
			{navItems.map(link =>
				<NavLink
					key={link.href}
					path={link.href}
					onClick={() => {
						if (isOpen && updateOpen) updateOpen()
					}}
				>
					{link.label}
				</NavLink>
			)}
		</ul>
	)
}
