import Image from 'next/image'
import s from './InfoBlock.module.css'

export function InfoBlock() {
	return (
		<article className={s.infoBlock}>
			<div className={s.infoBlockContentWrapper}>
				<Image
					className={s.infoBlockImage}
					src='/images/logo.svg'
					alt='Логотип сайту'
					width={218}
					height={47}
				/>
				<p className={s.infoBlockText}>
					- це місце для твого комфортного та цікавого спілкування!
				</p>
			</div>
		</article>
	)
}
