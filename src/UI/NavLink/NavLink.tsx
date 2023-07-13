import Link from 'next/link'
import s from './NavLink.module.css'

interface NavLinkPropsType {
	path: string
	children: string
}

export function NavLink({ path, children }: NavLinkPropsType) {
	return (
		<Link href={path} className={s.navLink}>
      	{children}
		</Link>
	)
}
