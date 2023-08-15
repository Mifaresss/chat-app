import s from './Header.module.css'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import logo from '@images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation/Navigation'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { BurgerMenuButton } from '@/UI/BurgerButton/BurgerButton'

export function Header() {

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<BurgerMenuButton />
				<div className={s.navWrapper}>
					<Link href='/'>
						<Image className={s.logo} src={logo} alt='Логотип сайту' />
					</Link>
					<Navigation />
				</div>
				<div className={s.secondBlockWrapper}>
					<SocialMenu className={s.socialBlock} />
					<LoginButton>Вхід</LoginButton>
				</div>
			</div>
		</header>
	)
}

