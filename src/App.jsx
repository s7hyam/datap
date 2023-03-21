import { Button } from '@chakra-ui/react'
import './App.css'
import Finance from './components/Finance'
import { Header } from './components/Header'
import Hero from './components/Hero'
import NewsLetter from './components/NewsLetter'
import Services from './components/Services'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Finance />
      <NewsLetter />
    </>
  )
}

export default App
