import s from './NavLIst.module.css'
import { NavLink } from '@/UI/NavLink/NavLink'

const navItems = [
	{ label: 'Приватні чати', href: '/private-chats' },
	{ label: 'Чат-кімнати', href: '/chat-rooms' },
	{ label: 'Підтримка', href: '/support' },
]

interface NavListProps {
	isOpen?: boolean
	updateOpen?: () => void
	highlight?: boolean
}

export function NavList({ isOpen, updateOpen, highlight }: NavListProps) {
	return (
		<ul className={s.navList}>
			{navItems.map(link => (
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
			))}
		</ul>
	)
}
