import s from './LogoutPopup.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { MouseEvent, forwardRef } from 'react'
import { Popup } from '@/UI/Popup/Popup'
import { Button } from '@/UI/Button/Button'
import { logout } from '@/redux/slices/userSlice/userSlice'
import { SubTitle } from '@/UI/SubTitle/SubTitle'

// eslint-disable-next-line react/display-name
export const LogoutPopup = forwardRef<HTMLDialogElement>((props, ref) => {
	const userId = useAppSelector(state => state.user.userId)

	const dispatch = useAppDispatch()

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	function confirmHandler(e: MouseEvent<HTMLButtonElement>) {
		dispatch(logout(userId))
	}

	return (
		<Popup ref={ref}>
			<div className={s.wrapper}>
				<SubTitle
					className={s.title}
					title='Точно хочеш вийти? Зайти під цим аккаунтом вже не зможеш'
				/>
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
