'use client'
import s from './SecondSection.module.css'
import Image from 'next/image'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'
import { cardsContent, title } from './data'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'

interface PropsType {}

const ws = new WebSocket('ws://212.86.108.155:8080')
console.log(ws)

ws.onopen = function () {
	console.log('Підключено до сервера')

	// Відправляємо подію підключення
	const connectionMessage = {
		event: 'connection',
		data: 'Клієнт підключився',
	}
	ws.send(JSON.stringify(connectionMessage))
}

export function SecondSection({}: PropsType) {
	const text = 'helo world'
	const message = {
		id: 'klsdnvlknsdvp;sdv',
		text,
	}
	ws.onerror = function (error) {
		console.error('Помилка підключення:', error)
	}

	ws.onmessage = function (event) {
		const message = JSON.parse(event.data)
		console.log('Повідомлення від сервера:', message)
	}
	function sendMessage() {
		console.log('sendMessage')
		const data = {
			event: 'message',
			data: {
				message,
			},
		}
		ws.send(JSON.stringify(message))
	}

	return (
		<section className={s.section}>
			<Title title={title} className={s.title} justify='center' />
			<div className={s.contentWrapper}>
				<button onClick={sendMessage}>send message</button>
				{cardsContent.map(({ id, img, subTitle, text }) => (
					<Link className={s.cardLink} href='#' key={id}>
						<InfoCard className={s.card} key={id}>
							<SvgIcon
								src='chat-rooms/second-block/sprite.svg'
								name={img.src}
								width={100}
								height={100}
							/>
							<SubTitle title={subTitle} />
							<p className={s.text}>{text}</p>
						</InfoCard>
					</Link>
				))}
			</div>
		</section>
	)
}
