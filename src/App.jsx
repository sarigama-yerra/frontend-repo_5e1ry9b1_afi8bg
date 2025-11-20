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
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
