import Nav from './components/Nav'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Lancamentos from './components/Lancamentos'
import Videos from './components/Videos'
import Agenda from './components/Agenda'
import Loja from './components/Loja'
import Contato from './components/Contato'
import Footer from './components/Footer'
import ClientScripts from './components/ClientScripts'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Sobre />
      <Lancamentos />
      <Videos />
      <Agenda />
      <Loja />
      <Contato />
      <Footer />
      <ClientScripts />
    </>
  )
}
