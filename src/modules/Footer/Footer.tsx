import s from './Footer.module.css'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import logo from '@images/logo.svg'
import Image from 'next/image'
import { NavList } from '@/components/NavList/NavList'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.footerContainer}>
				<Link href='/'>
					<Image priority className={s.logo} src={logo} alt='Логотип сайту' />
				</Link>
				<NavList />
				<div className={s.social}>
					<p>Соціальні мережі:</p>
					<SocialMenu reverse />
				</div>
			</div>
		</footer>
	)
}
