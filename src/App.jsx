import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('green') // 'green' | 'blue' | 'dark'

  const bgClass = theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'

  return (
    <div className={bgClass}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero theme={theme} />
        <Services theme={theme} />
        <Pricing theme={theme} />
        <Portfolio theme={theme} />
        <WhyChoose theme={theme} />
        <Testimonials theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  )
}

export default App
