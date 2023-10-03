import s from './EditUserPopup.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { MouseEvent, forwardRef, useId } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { authValidationSchema, loginPopupUsersMood } from './data'
import { Popup } from '@/UI/Popup/Popup'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { TextField } from '@/UI/TextField/TextField'
import { Button } from '@/UI/Button/Button'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { login, update } from '@/redux/slices/userSlice/userSlice'
import { UserMoodRadioInput } from '@/UI/UserMoodRadioInput/UserMoodRadioInput'

interface FormValues {
	userName: string
	userMood: string
}

// eslint-disable-next-line react/display-name
export const EditUserPopup = forwardRef<HTMLDialogElement>((props, ref) => {
	const { userName, userMood, userId } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()

	const formId = useId()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: yupResolver(authValidationSchema),
		values: { userName, userMood: getEmojiFromResponse(userMood) },
	})

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
			id: userId,
		}

		await dispatch(update(newData))
		reset()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	return (
		<Popup
			ref={ref}
			onClose={() => {
				reset()
			}}
		>
			<div className={s.wrapper}>
				<SubSubTitle
					align='center'
					label='Тут ти можеш змінити ім′я та/або настрій'
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
						{errors.userMood && (
							<span className={s.emojiError}>{errors.userMood.message}</span>
						)}
						{loginPopupUsersMood.map(mood => (
							<UserMoodRadioInput
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
						<Button type='submit' title='Підтвердити' form={formId} />
					</div>
				</form>
			</div>
		</Popup>
	)
})
