import MainLogo from '@/UI/Logo/Logo'
import s from './Footer.module.css'

export function Footer() {
	return (
		<div className={s.main}>
			<MainLogo />
			<div className={s.social}>
				<h3 className={s.socialTitle}>Соціальні мережі:</h3>
				<div className={s.socialList}>
					<a className={s.socialLinkFacebook} href='https://www.Facebook.com/'>

						facebook
					</a>
					<a className={s.socialLinkInstagram} href='https://www.Instagram.com/'>
						Instagram

					</a>
				</div>
			</div>
		</div>
	)
}
