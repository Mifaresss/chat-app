import MainLogo from '@/UI/Logo/Logo'
import s from './Footer.module.css'

function Footer() {
  return (
    <div className={s.main}>
      <MainLogo />
      <div className={s.social}>
        <h3 className={s.socialTitle}>Соціальні мережі:</h3>
        <div className={s.socialList}>
          <a className={s.socialLinkFacebook} href='https://www.Facebook.com/'>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.0415 17.8333V22.1667H17.2915V29.75H21.6248V22.1667H24.8748L25.9582 17.8333H21.6248V15.6667C21.6248 15.3793 21.739 15.1038 21.9421 14.9006C22.1453 14.6975 22.4209 14.5833 22.7082 14.5833H25.9582V10.25H22.7082C21.2716 10.25 19.8938 10.8207 18.878 11.8365C17.8622 12.8523 17.2915 14.2301 17.2915 15.6667V17.8333H14.0415Z'
                stroke='#001966'
                stroke-linecap='round'
                stroke-linejoin='round'
                fill='extend'
              />
              <rect x='7' y='7' width='26' height='26' rx='4.5' stroke='#001966' />
            </svg>
          </a>
          <a className={s.socialLinkInstagram} href='https://www.Instagram.com/'>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_27_895)'>
                <path
                  d='M6.6665 13.4167C6.6665 11.6265 7.37766 9.90959 8.64353 8.64372C9.9094 7.37785 11.6263 6.66669 13.4165 6.66669H26.9165C28.7067 6.66669 30.4236 7.37785 31.6895 8.64372C32.9553 9.90959 33.6665 11.6265 33.6665 13.4167V26.9167C33.6665 28.7069 32.9553 30.4238 31.6895 31.6897C30.4236 32.9555 28.7067 33.6667 26.9165 33.6667H13.4165C11.6263 33.6667 9.9094 32.9555 8.64353 31.6897C7.37766 30.4238 6.6665 28.7069 6.6665 26.9167V13.4167Z'
                  stroke='#001966'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5979 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5979 15.5268 21.3261 15 20 15C18.6739 15 17.4021 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20Z'
                  stroke='#001966'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path d='M27.5 12.5V12.5167' stroke='#001966' stroke-linecap='round' stroke-linejoin='round' />
              </g>
              <defs>
                <clipPath id='clip0_27_895'>
                  <rect width='40' height='40' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
