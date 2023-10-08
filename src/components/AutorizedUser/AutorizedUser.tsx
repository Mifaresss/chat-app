import s from './AutorizedUser.module.css'
import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { HTMLAttributes, useRef } from 'react'
import { LogoutPopup } from '@/components/LogoutPopup/LogoutPopup'
import { EditUserPopup } from '@/components/EditUserPopup/EditUserPopup'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import { EmojiNumber } from '@/types/emojies'

interface Props extends HTMLAttributes<HTMLDivElement> {
	name: string
	emoji: EmojiNumber
	ellipsis?: boolean
}

export function AutorizedUser({ name, emoji, className, ellipsis = true, ...props }: Props) {
	const dialogRef = useRef<HTMLDialogElement | null>(null)
	function openPopupHandler() {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}

	const editUserRef = useRef<HTMLDialogElement | null>(null)
	function editUserHandler() {
		if (editUserRef.current) {
			editUserRef.current.showModal()
		}
	}

	return (
		<div className={[s.wrapper, className].join(' ')} {...props}>
			<article className={s.user} onClick={editUserHandler}>
				<SubSubTitle
					className={s.userName}
					style={
						!ellipsis ? { overflow: 'auto', textOverflow: 'initial', maxWidth: 'none' } : {}
					}
					label={name}
					color='--color-3'
				/>
				<SvgIcon
					className={`${s.button} ${s.userMood}`}
					src='icons/sprite.svg'
					name={getEmojiFromResponse(emoji)}
				/>
			</article>
			<SvgIcon
				onClick={openPopupHandler}
				className={`${s.button} ${s.exitButton}`}
				src='icons/sprite.svg'
				name='exit'
			/>
			<EditUserPopup ref={editUserRef} />
			<LogoutPopup ref={dialogRef} />
		</div>
	)
}
