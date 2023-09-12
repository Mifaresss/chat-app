import s from './UserName.module.css'

interface PropsType {
	name: string
}

export function UserName({ name }: PropsType) {
	return <p className={s.userName}>{name}</p>
}
