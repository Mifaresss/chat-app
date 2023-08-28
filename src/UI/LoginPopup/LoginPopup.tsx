import { useState, useRef, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import s from './LoginPopup.module.css'
// import Image from 'next/image'
// import emoji1 from '@images/login-popup/emoji-1.svg'
// import emoji2 from '@images/login-popup/emoji-2.svg'
// import emoji3 from '@images/login-popup/emoji-3.svg'
// import emoji4 from '@images/login-popup/emoji-4.svg'
// import emoji5 from '@images/login-popup/emoji-5.svg'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'
// import { SvgIcon } from '../SvgIcon/SvgIcon'

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

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		dispatch(registerUser({ name }))
		setName('')
	}

	function closeModalHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	return (
		<dialog className={s.popup} ref={ref}>
			<div className={s.popupContent}>
				<SubSubTitle
					align='center'
					label='Щоб продовжити далі, авторизуйся та обери, який настрій маєш сьогодні!'
					className={s.popupTitle}
				/>
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
