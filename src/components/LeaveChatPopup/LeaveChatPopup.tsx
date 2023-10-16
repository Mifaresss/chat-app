import s from './LeaveChatPopup.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { MouseEvent, forwardRef } from 'react'
import { Popup } from '@/UI/Popup/Popup'
import { Button } from '@/UI/Button/Button'
import { SubTitle } from '@/UI/SubTitle/SubTitle'
import { PassiveButton } from '@/UI/PassiveButton/PassiveButton'

interface Props {
	chatId: string | null
}

// eslint-disable-next-line react/display-name
export const LeaveChatPopup = forwardRef<HTMLDialogElement, Props>((props, ref) => {
	const dispatch = useAppDispatch()

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	function confirmHandler(e: MouseEvent<HTMLButtonElement>) {
		// dispatch(logout(props.chatId))
	}

	return (
		<Popup ref={ref}>
			<div className={s.wrapper}>
				<SubTitle className={s.title} title='Вийти?' />
				<div className={s.wrapperButtons}>
					<PassiveButton
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
