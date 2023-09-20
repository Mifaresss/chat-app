import { SubTitle } from '@/UI/SubTitle/SubTitle'
import s from './PrivacyPolicy.module.css'

export function PrivacyPolicy() {
	return (
		<section className={s.policy}>
			<SubTitle color='--color-9' align='center' title='Політика конфіденційності' />
			<p className={s.policyText}>
				Ми не запитуємо твої персональні дані, вони належать тільки тобі. Ми не збираємо та не
				зберігаємо інформацію про твою IP адресу, вона видаляється автоматично. Ми не
				використовуємо сервіси аналітики та не пропонуємо тобі додаткову рекламу. Під час входу
				у чат ти береш на себе відповідальність за подальше спілкування. Якщо хтось спілкується
				некоректно, будь ласка, сповісти нас про це.
			</p>
		</section>
	)
}
