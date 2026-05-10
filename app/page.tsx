import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certs from '@/components/Certs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-[54px]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
