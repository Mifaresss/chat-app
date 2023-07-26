import s from './Button.module.css'

interface ButtonPropsType {
	children: string
}

export function Button({ children }: ButtonPropsType) {

	return (
		<button className={s.button}>
			{children}
		</button>
	)
}
