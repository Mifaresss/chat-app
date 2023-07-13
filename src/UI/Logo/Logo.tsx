import Image from 'next/image'

import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <Image className={styles.logoImage} src='/images/logo.svg' alt='Логотип сайту' width={218} height={47} />
    </div>
  )
}

export default Logo
