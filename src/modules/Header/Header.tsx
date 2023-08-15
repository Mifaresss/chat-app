import s from './Header.module.css'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import logo from '@images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation/Navigation'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { Button } from '@/UI/Button/Button'

export function Header() {

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<div className={s.navWrapper}>
					<Link href='/'>
						<Image className={s.logo} src={logo} alt='Логотип сайту' />
					</Link>
					<Navigation type='header' />
				</div>
				<div className={s.secondBlockWrapper}>
					<SocialMenu />
					{/* <LoginButton className={s.loginBtn}>Вхід</LoginButton> */}
					<Button>Вхід</Button>
				</div>
			</div>
		</header>
	)
}

