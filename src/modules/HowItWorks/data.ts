import talking from '@images/how-it-works/talking.svg'
import invite from '@images/how-it-works/invite.svg'
import create from '@images/how-it-works/create.svg'

export const title = 'Як це працює?'
export const cardsContent = [
	{
		id: 1,
		img: { src: talking, alt: 'Спілкування' },
		subTitle: 'Спілкуйся',
		text: 'Анонімне спілкування з користувачами за спільними інтересами. Використай цю можливість, щоб дізнатися щось корисне!',
	},
	{
		id: 2,
		img: { src: invite, alt: 'Додавання юзера' },
		subTitle: 'Запрошуй',
		text: 'Запрошуй друзів та знайомих, використовуй анонімне спілкування, щоб дізнатися справжню думку оточуючих!',
	},
	{
		id: 3,
		img: { src: create, alt: 'Створювання' },
		subTitle: 'Створюй',
		text: 'Створюй нові чат кімнати для обговорення важливих та цікавих тем. Стань генератором нових супер ідей!',
	},
]
