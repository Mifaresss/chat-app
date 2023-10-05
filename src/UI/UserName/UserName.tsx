import s from './UserName.module.css'

interface Props {
	name: string
}

export function UserName({ name }: Props) {
	return <p className={s.userName}>{name}</p>
}
