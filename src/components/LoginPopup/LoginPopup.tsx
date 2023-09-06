import { forwardRef, MouseEvent } from 'react'
import s from './LoginPopup.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { TextField } from '@/UI/TextField/TextField'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { Button } from '@/UI/Button/Button'
import { authValidationSchema, loginPopupUsersMood } from './data'
import { UserMood } from './components/UserMood/UserMood'

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

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
			reset()
		}
	}
	function onSubmit(data: FormValues) {
		console.log(data)
		reset()
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
							<span className={s.emojiError}>Оберіть ваш настрій, будь ласка:)</span>
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
