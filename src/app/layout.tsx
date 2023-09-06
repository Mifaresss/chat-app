'use client'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

import './styles/reset.css'
import './styles/globals.css'

const roboto = Roboto({
	weight: ['300', '500', '700'],
	style: ['normal'],
	subsets: ['cyrillic'],
	display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='uk'>
			<head>
				<title>Our Chat</title>
			</head>
			<body className={roboto.className}>
				<Provider store={store}>
					<Header />
					<main className='main'>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
