import s from './ExitChatPopup.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { MouseEvent, forwardRef } from 'react'
import { Popup } from '@/UI/Popup/Popup'
import { Button } from '@/UI/Button/Button'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { apiInstance } from '@/api/base'
import { setPrivateChats } from '@/redux/slices/privateChatsSlice'

interface Props {
	chatId: string
}

// eslint-disable-next-line react/display-name
export const ExitChatPopup = forwardRef<HTMLDialogElement, Props>((props, ref) => {
	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	async function confirmHandler(e: MouseEvent<HTMLButtonElement>) {
		const { data } = await apiInstance.post('privates/leave', {
			userId,
			chatId: props.chatId,
		})
		dispatch(setPrivateChats(data.chats))
		if (typeof ref === 'object' && ref?.current !== null) {
			ref?.current.close()
		}
	}

	return (
		<Popup ref={ref}>
			<div className={s.wrapper}>
				<SubTitle className={s.title} title='Підтверди, пліз)' />
				<div className={s.wrapperButtons}>
					<Button
						type='button'
						title='Закрити'
						onClick={closeModalHandler}
						className={s.cancelButton}
					/>
					<Button type='button' title='Підтвердити' onClick={confirmHandler} />
				</div>
			</div>
		</Popup>
	)
})
