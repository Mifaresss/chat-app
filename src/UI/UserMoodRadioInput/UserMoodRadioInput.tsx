import s from './UserMoodRadioInput.module.css'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'

interface PropsType {
	name: string
	value: string
	register: any
	className?: string
}

export function UserMoodRadioInput({ name, value, register, className }: PropsType) {
	return (
		<label className={s.emoji}>
			<input
				{...register('userMood')}
				className={[s.emojiInput, className].join(' ')}
				type='radio'
				name={name}
				value={value}
			/>
			<SvgIcon src='icons/sprite.svg' name={value} className={s.emojiImg} />
		</label>
	)
}
