import s from './Loader.module.css'

interface PropsType {}

export function Loader({}: PropsType) {
	return (
		<div className={s.ldsRipple}>
			<div></div>
			<div></div>
		</div>
	)
}
