import { useState, useRef, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import s from './LoginPopup.module.css'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'

import { registerUser } from '../../redux/auth/auth-operations'

interface PropsType { }

interface RegistrationFormValues {
  userName: string;
}

// eslint-disable-next-line react/display-name
export const LoginPopup = forwardRef<HTMLDialogElement>((_, ref) => {
	const dispatch = useDispatch()
	const RegisterRef = useRef<HTMLDialogElement>(null)
	const [name, setName] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(registerUser({ name }))
		setName('')
		closeModalHandler()
	}

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
					<TextField value={ name }  placeholder='Ім’я' onChange={(e) => setName(e.target.value)} />
				</form>
				<div className={s.wrapperButtons}>
					<Button title='Закрити' onClick={closeModalHandler} className={s.cancelButton} />
					<Button title='Авторизуватися' onClick={handleSubmit} form='loginPopupForm' />
				</div>
				<button onClick={closeModalHandler} className={s.cancelButton2}></button>
			</div>
		</dialog>
	)
})
