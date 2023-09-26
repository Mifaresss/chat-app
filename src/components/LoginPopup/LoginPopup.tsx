import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import s from './LoginPopup.module.css'
import { MouseEvent, forwardRef, useId, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { authValidationSchema, loginPopupUsersMood } from './data'
import { login } from '@/redux/slices/authSlice'
import { Popup } from '@/UI/Popup/Popup'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { TextField } from '@/UI/TextField/TextField'
import { UserMood } from './components/UserMood/UserMood'
import { Button } from '@/UI/Button/Button'

interface FormValues {
	userName: string
	userMood: string
}

// eslint-disable-next-line react/display-name
export const LoginPopup = forwardRef<HTMLDialogElement>((props, ref) => {
	const dispatch = useAppDispatch()

	const formId = useId()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({ resolver: yupResolver(authValidationSchema) })

	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		reset()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	async function onSubmit(data: FormValues) {
		const newData = {
			userName: data.userName,
			userMood: Number(data.userMood.at(-1)),
		}

		await dispatch(login(newData))
		reset()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	return (
		<Popup ref={ref}>
			<SubSubTitle
				align='center'
				label='Щоб продовжити далі, авторизуйся та обери, який настрій маєш сьогодні!'
				className={s.popupTitle}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={s.popupForm} id={formId}>
				<TextField
					placeholder='Ім’я'
					register={register}
					name='userName'
					error={errors.userName}
				/>
				<div className={s.emojiesWrapper}>
					{errors.userMood && <span className={s.emojiError}>{errors.userMood.message}</span>}
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
					<Button
						type='button'
						title='Закрити'
						onClick={closeModalHandler}
						className={s.cancelButton}
					/>
					<Button type='submit' title='Авторизуватися' form={formId} />
				</div>
			</form>
		</Popup>
	)
})
