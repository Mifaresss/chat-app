import s from './Popup.module.css'
import { forwardRef, MouseEvent, ReactNode } from 'react'

interface Props {
	children?: ReactNode
	onClose?: () => void
}

// eslint-disable-next-line react/display-name
export const Popup = forwardRef<HTMLDialogElement, Props>((props, ref) => {
	function closeModalHandler(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		props.onClose && props.onClose()
		if (typeof ref === 'object' && ref !== null && ref.current !== null) {
			ref.current.close()
		}
	}

	return (
		<dialog className={s.popup} ref={ref}>
			<div className={s.popupContent}>
				<button onClick={closeModalHandler} className={s.cancelButton2}></button>
				{props.children}
			</div>
		</dialog>
	)
})
