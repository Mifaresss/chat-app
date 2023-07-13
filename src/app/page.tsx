import Header from '@/modules/Header/Header'
import { HeroSection } from '@/modules/HeroSection/HeroSection'
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.main}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </main>
  )
}
