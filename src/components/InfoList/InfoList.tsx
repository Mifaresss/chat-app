import s from './InfoList.module.css'

interface InfoListPropsType {
	listStyleImg: string
}

export function InfoList({ listStyleImg }: InfoListPropsType) {

	return (
		<ul className={s.infoList}>
			<li>Спілкуйся з користувачами приватно або у чат кімнатах</li>
			<li>Обирай кола людей за своїми інтересами</li>
			<li>Використовуй НАШChat для анонімного спілкування</li>
			<li>Вільне спілкування в масштабах всієї планети</li>
			<li>Твої повідомлення видаляються через 48 годин</li>
			<li>Відсутність обов’язкової реєстрації та збору персональних даних</li>
		</ul>
	)
}
