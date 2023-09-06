import React from 'react'
import styles from './PopUp.module.css'

function PopUpAutorisation({
	title,
	text,
	setisAuthPopUp,
}: {
	title: string
	text?: string
	setisAuthPopUp: any
}) {
	setTimeout(() => {
		localStorage.setItem('isAuth', 'true')
		setisAuthPopUp(false)
	}, 2000)
	return (
		<div className={styles.beckDrop}>
			<div className={styles.form}>
				<h1 className={styles.title}>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default PopUpAutorisation
