import MainLogo from '@/UI/Logo/Logo'
import s from './Footer.module.css'

function Footer() {
  return (
    <div className={s.main}>
      <MainLogo />
      <div className={s.social}>
        <h3 className={s.socialTitle}>Соціальні мережі:</h3>
        <div className={s.socialList}>
          <a className={s.socialLinkLinkedin} href='https://www.linkedin.com/'></a>
          <a className={s.socialLinkTwitter} href='https://www.twitter.com/'></a>
          <a className={s.socialLinkInstagram} href='https://www.instagram.com/'></a>
          <a className={s.socialLinkFacebook} href='https://www.facebook.com/'></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
