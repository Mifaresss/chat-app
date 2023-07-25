import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import Navigation from '@/components/Navigation/Navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from  '@/img/logo.svg'
import Image from 'next/image'

import s from './Header.module.css'

// const ws = new WebSocket('https://chat-server-socket-production.up.railway.app/')
// console.log(ws)

export function Header() {
	return (
		<section className={s.main}>
			<div className={s.firstBloc}>
				<Image className={s.infoBlockImage} src={logo} alt='Логотип сайту'/>
				<Navigation type='header'/>
				<AiOutlineMenu size={35} color={'white'} className={s.burgerMenu}/>
			</div>
			<div className={s.secondBlock}>
				<LoginButton className={s.loginBtn}>
				Вхід
				</LoginButton >
				<SocialMenu type='header'/>
			</div>
		</section>
	)
}

export default Header

