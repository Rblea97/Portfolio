import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certs from '@/components/Certs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="pt-[54px]">
        <Hero />
        <StatsBar />
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
