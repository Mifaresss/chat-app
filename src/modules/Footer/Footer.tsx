import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import logo from  '@images/logo.svg'
import Image from 'next/image'

import s from './Footer.module.css'

export function Footer() {

	return (
		<section className='container'>
			<section className={s.main}>
				<div className={s.firstBloc}>
					<Image className={s.infoBlockImage} src={logo} alt='Логотип сайту'/>
					{/* <Navigation type='footer'/> */}
				</div>
				<div className={s.secondBlock}>
					<SocialMenu />
				</div>
			</section>
		</section>
	)
}
