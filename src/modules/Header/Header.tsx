import s from './Header.module.css'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import Navigation from '@/components/Navigation/Navigation'
import logo from  '@images/logo.svg'
import Image from 'next/image'

export function Header() {
	return (
		<header className={s.main}>
			<div className={s.firstBloc}>
				<Image className={s.infoBlockImage} src={logo} alt='Логотип сайту'/>
				<Navigation type='header'/>
			</div>
			<div className={s.secondBlock}>
				<LoginButton className={s.loginBtn}>
				Вхід
				</LoginButton >
				<SocialMenu type='header'/>
			</div>
		</header>
	)
}

export default Header

