import { Emoji } from '@/types/emojies'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import s from './UserEmoji.module.css'

interface Props {
	emoji: Emoji
}

export function UserEmoji({ emoji }: Props) {
	return <SvgIcon src='icons/sprite.svg' name={emoji} className={s.emoji} width={25} height={25} />
}
