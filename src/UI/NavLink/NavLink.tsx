import s from './NavLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkPropsType {
	path: string
	children: string
}

export function NavLink({ path, children }: NavLinkPropsType) {
	const currentPath = usePathname()
	const isActive = currentPath === path

	return (
		<Link href={path} className={[s.navLink, isActive ? s.active : ''].join(' ')}>
			{children}
		</Link>
	)
}
