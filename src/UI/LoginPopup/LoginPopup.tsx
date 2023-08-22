import { RefObject, ForwardedRef, forwardRef } from 'react'
import s from './LoginPopup.module.css'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'

interface PropsType {}

// eslint-disable-next-line react/display-name
export const LoginPopup = forwardRef<HTMLDialogElement>((_, ref) => {

	function closeModalHandler() {
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	return (
		<dialog className={s.popup} ref={ref}>
			<div className={s.popupContent}>
				<SubSubTitle label='Щоб продовжити далі, авторизуйся!' className={s.popupTitle} />
				<form className={s.popupForm} id='loginPopupForm'>
					<TextField placeholder='Ім’я' />
				</form>
				<div className={s.wrapperButtons}>
					<Button title='Закрити' onClick={closeModalHandler} className={s.cancelButton} />
					<Button title='Авторизуватися' form='loginPopupForm' />
				</div>
				<button onClick={closeModalHandler} className={s.cancelButton2}></button>
			</div>
		</dialog>
	)
})
