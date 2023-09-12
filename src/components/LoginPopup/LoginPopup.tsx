import { forwardRef, MouseEvent } from 'react'
import s from './LoginPopup.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { TextField } from '@/UI/TextField/TextField'
import { Button } from '@/UI/Button/Button'
import { authValidationSchema, loginPopupUsersMood } from './data'
import { UserMood } from './components/UserMood/UserMood'
import { loginAsync } from '@/redux/authSlice'
import { useAppDispatch } from '@/hooks/redux'

interface FormValues {
	userName: string
	userMood: string
}

// eslint-disable-next-line react/display-name
export const LoginPopup = forwardRef<HTMLDialogElement>((_, ref) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({ resolver: yupResolver(authValidationSchema) })

	const dispatch = useAppDispatch()

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		reset()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	function onSubmit(data: FormValues) {
		dispatch(loginAsync(data))
		reset()
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
				<form onSubmit={handleSubmit(onSubmit)} className={s.popupForm} id='loginPopupForm'>
					<TextField
						placeholder='Ім’я'
						register={register}
						name='userName'
						error={errors.userName}
					/>
					<div className={s.emojiesWrapper}>
						{errors.userMood && (
							<span className={s.emojiError}>{errors.userMood.message}</span>
						)}
						{loginPopupUsersMood.map(mood => (
							<UserMood
								key={mood}
								name='userMood'
								value={mood}
								register={register}
								className={s.emojiInput}
							/>
						))}
					</div>
					<div className={s.wrapperButtons}>
						<Button title='Закрити' onClick={closeModalHandler} className={s.cancelButton} />
						<Button title='Авторизуватися' form='loginPopupForm' />
					</div>
				</form>
				<button onClick={closeModalHandler} className={s.cancelButton2}></button>
			</div>
		</dialog>
	)
})
