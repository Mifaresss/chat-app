import { Title } from '@/UI/Title/Title'
import s from './NotFound.module.css'
import { Text } from '@/UI/Text/Text'
import { Button } from '@/UI/Button/Button'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

export function NotFound({}: Props) {
	return (
		<section className={s.mainContainer}>
			<div className={s.contentWrapper}>
				<div className={s.content}>
					<h1 className={s.title}>404</h1>
					<div className={s.internalContentWrapper}>
						<Title className={s.title2} title='Ой, щось пішло не так!' />
						<p className={s.description}>
							Сторінка, яку ви намагаєтесь відкрити, не може бути знайдена на сервері
						</p>
					</div>
					<Link href='/'>
						<Button className={s.button} title='На головну' />
					</Link>
				</div>
				<Image
					className={s.image}
					src='/images/not-found/404.jpg'
					alt=''
					width={630}
					height={430}
				/>
			</div>
		</section>
	)
}
