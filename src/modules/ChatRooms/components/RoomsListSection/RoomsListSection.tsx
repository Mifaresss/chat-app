'use client'
import { useEffect, useState } from 'react'
import s from './RoomsListSection.module.css'
import { Title } from '@/UI/Title/Title'
import { InfoCard } from '@/components/InfoCard/InfoCard'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchRooms, setError } from '@/redux/slices/roomsSlice'
import { usePathname, useRouter } from 'next/navigation'
import { Loader } from '@/UI/Loader/Loader'
import { CreatingPrivateChatLoading } from './components/CreatingPrivateChatLoading'
import { apiInstance } from '@/api/base'
import { addPrivateChat } from '@/redux/slices/privateChatsSlice'

interface Props {}

export function RoomsListSection({}: Props) {
	const { rooms, loading, error } = useAppSelector(state => state.rooms)
	const userId = useAppSelector(state => state.user.userId)
	const path = usePathname()
	const dispatch = useAppDispatch()

	const [isCreatingPrivateChat, setIsCreatingPrivateChat] = useState(false)

	useEffect(() => {
		if (rooms.length === 0) {
			dispatch(fetchRooms())
		} else {
			dispatch(setError(null))
		}
	}, [dispatch, rooms.length])

	const router = useRouter()

	async function addNewPrivateChat() {
		setIsCreatingPrivateChat(true)
		const { data } = await apiInstance.post('privates/add', {
			userId,
		})
		setIsCreatingPrivateChat(false)
		console.log(data)
		dispatch(addPrivateChat({ id: data.id, title: data.title }))
		router.push('/private-chats/' + data.id)
	}

	return (
		<section className={s.section}>
			<Title
				title={
					loading
						? 'Почекай трохи, щось з твоїм інетом (або сервером)...'
						: error || 'Обери чат-кімнату для спілкування:'
				}
				className={s.title}
				justify='center'
			/>
			<div className={s.contentWrapper}>
				{loading ? (
					<Loader />
				) : (
					rooms.map(({ id, title, description }) => (
						<Link className={s.cardLink} href={path + '/' + id} key={id}>
							<InfoCard className={s.card}>
								<SvgIcon src='icons/sprite.svg' name={id} width={100} height={100} />
								<SubTitle title={title} />
								<p className={s.text}>{description}</p>
							</InfoCard>
						</Link>
					))
				)}
				{!loading && (
					<div
						className={[s.cardLink, isCreatingPrivateChat ? s.sdisabled : ''].join(' ')}
						onClick={addNewPrivateChat}
					>
						<InfoCard className={s.card}>
							{isCreatingPrivateChat && <CreatingPrivateChatLoading />}
							<SvgIcon src='icons/sprite.svg' name='private' width={100} height={100} />
							<SubTitle title='Приватний чат' />
							<p className={s.text}>
								Якщо є ідеї для обговорення - створи новий чат зі своєю тематикою та збери
								однодумців для спілкування!
							</p>
						</InfoCard>
					</div>
				)}
			</div>
		</section>
	)
}
