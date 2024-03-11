import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header';
import { MainComponent } from './components/MainComponent/MainComponent';
import { Footer } from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <Header />
      <MainComponent />
      <FooterComponent />          
    </>
  )
}

export default App
