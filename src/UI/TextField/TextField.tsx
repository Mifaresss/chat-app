import s from './TextField.module.css'
import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	register: any
	name: string
	error: FieldError | undefined
}

export function TextField({ register, name, error, ...props }: Props) {
	return (
		<div className={s.inputWrapper}>
			<input {...register(name)} {...props} className={`${s.input} ${error && s.inputError}`} />
			{error && <span className={s.error}>{error.message}</span>}
		</div>
	)
}
