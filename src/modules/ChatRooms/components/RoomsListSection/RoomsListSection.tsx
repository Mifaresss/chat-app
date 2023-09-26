'use client'
import { useEffect } from 'react'
import s from './RoomsListSection.module.css'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchRooms } from '@/redux/slices/roomsSlice'
import { usePathname } from 'next/navigation'
import { Loader } from '@/UI/Loader/Loader'

interface PropsType {}

export function RoomsListSection({}: PropsType) {
	const { rooms, loading, error } = useAppSelector(state => state.rooms)
	const path = usePathname()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchRooms())
	}, [dispatch])

	return (
		<section className={s.section}>
			<Title title='Обери чат-кімнату для спілкування:' className={s.title} justify='center' />
			<div className={s.contentWrapper}>
				{loading ? (
					<Loader />
				) : error ? (
					<p className={s.error}>{error}</p>
				) : (
					rooms
						.toSorted((a, b) => a.id - b.id)
						.map(({ id, name, description, image }) => (
							<Link className={s.cardLink} href={path + id} key={id}>
								<InfoCard className={s.card}>
									<SvgIcon
										src='chat-rooms/second-block/sprite.svg'
										name={image.name}
										width={100}
										height={100}
									/>
									<SubTitle title={name} />
									<p className={s.text}>{description}</p>
								</InfoCard>
							</Link>
						))
				)}
				{!loading && (
					<Link className={s.cardLink} href='6'>
						<InfoCard className={s.card}>
							<SvgIcon
								src='chat-rooms/second-block/sprite.svg'
								name='private'
								width={100}
								height={100}
							/>
							<SubTitle title='Приватний чат' />
							<p className={s.text}>
								Якщо є ідеї для обговорення - створи новий чат зі своєю тематикою та збери
								однодумців для спілкування!
							</p>
						</InfoCard>
					</Link>
				)}
			</div>
		</section>
	)
}
