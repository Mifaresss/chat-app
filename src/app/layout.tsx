'use client'
import { PersistGate } from 'redux-persist/integration/react'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'

import './styles/reset.css'
import './styles/globals.css'
import { useEffect, useState } from 'react'

const roboto = Roboto({
	weight: ['300', '500', '700'],
	style: ['normal'],
	subsets: ['cyrillic'],
	display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const root = localStorage.getItem('persist:root')
		if (root) {
			const { auth } = JSON.parse(root)
			const id: string = auth && JSON.parse(auth)?.userId

			// TODO: login logic
		}
	}, [])

	return (
		<html lang='uk'>
			<head>
				<title>Our Chat</title>
			</head>
			<body className={roboto.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Header />
						<main className='main'>{children}</main>
						<Footer />
					</PersistGate>
				</Provider>
			</body>
		</html>
	)
}
