import s from './TextField.module.css'
import { InputHTMLAttributes } from 'react'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {}

export function TextField({ ...props }: PropsType) {
	return <input {...props} className={s.input} />
}
