import { forwardRef, MouseEvent, FormEvent, useState } from 'react'
import { IAuth } from '../../models/models'
import { login } from '../../redux/ActionCreators'
import s from './LoginPopup.module.css'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'
import { SvgIcon } from '../SvgIcon/SvgIcon'

interface PropsType {}

// eslint-disable-next-line react/display-name
export const LoginPopup = forwardRef<HTMLDialogElement>((_, ref) => {
	// const dispatch = useAppDispatch()
	const [name, setName] = useState<IAuth>({
		username: 'RomaLesyo',
	})

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	const isFormValid = () => {
		return name.username.trim().length
	}

	const submitHandler = async (event: any) => {
		event.preventDefault()
		if (isFormValid()) {
			console.log(name)
			// await dispatch(login(name))
			if (typeof ref === 'object' && ref !== null && ref.current !== null) {
				ref.current.close()
			}
		} else {
			alert('Form is invalid!')
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
					<TextField placeholder='Ім’я' />
					<div className={s.emojiesWrapper}>
						<label className={s.emoji}>
							<input className={s.emojiInput} type='radio' name='emoji' value='emoji1' />
							<SvgIcon
								width={40}
								height={40}
								src='login-popup/sprite.svg'
								name='emoji-1'
								className={s.emojiImg}
							/>
						</label>
						<label className={s.emoji}>
							<input className={s.emojiInput} type='radio' name='emoji' value='emoji2' />
							<SvgIcon
								width={40}
								height={40}
								src='login-popup/sprite.svg'
								name='emoji-2'
								className={s.emojiImg}
							/>
						</label>
						<label className={s.emoji}>
							<input className={s.emojiInput} type='radio' name='emoji' value='emoji3' />
							<SvgIcon
								width={40}
								height={40}
								src='login-popup/sprite.svg'
								name='emoji-3'
								className={s.emojiImg}
							/>
						</label>
						<label className={s.emoji}>
							<input className={s.emojiInput} type='radio' name='emoji' value='emoji4' />
							<SvgIcon
								width={40}
								height={40}
								src='login-popup/sprite.svg'
								name='emoji-4'
								className={s.emojiImg}
							/>
						</label>
						<label className={s.emoji}>
							<input className={s.emojiInput} type='radio' name='emoji' value='emoji5' />
							<SvgIcon
								width={40}
								height={40}
								src='login-popup/sprite.svg'
								name='emoji-5'
								className={s.emojiImg}
							/>
						</label>
					</div>

					<div className={s.wrapperButtons}>
						<Button title='Закрити' onClick={closeModalHandler} className={s.cancelButton} />
						<Button title='Авторизуватися' onClick={submitHandler} form='loginPopupForm' />
					</div>
				</form>
				<button onClick={closeModalHandler} className={s.cancelButton2}></button>
			</div>
		</dialog>
	)
})
