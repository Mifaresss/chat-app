import { NavLink } from '@/UI/NavLink/NavLink'

import s from './Navigation.module.css'

const navItems = [

	{ label: 'Новий чат', href: '/' },
	{ label: 'Чат кімнати', href: '/rooms' },
	{ label: 'Підтримка', href: '/support' },

]

function Navigation({ type }: { type: string }) {

	return (
		<ul className={type === 'header' ? s.navHederWrapper : s.navFooterWrapper}>
			{navItems.map(link => {
				return (
					<NavLink key={link.href}  path={link.href}>
						{link.label}
					</NavLink>
				)
			})}
		</ul>
	)
}
export default Navigation
