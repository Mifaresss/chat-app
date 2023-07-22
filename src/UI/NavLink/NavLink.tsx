import Link from 'next/link'
import s from './NavLink.module.css'

interface NavLinkPropsType {
	path: string
	children: string
	className?: string
}

export function NavLink({ path, children, className }: NavLinkPropsType) {
	return (
		<Link href={path} className={s.navLink}>
			{children}
		</Link>
	)
}
