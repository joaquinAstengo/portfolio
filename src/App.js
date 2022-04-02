import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Hamburguer from "./components/Hamburguer"
import { useEffect, useState } from "react"

function App() {
  const initialWidth = window.innerWidth
  const [width, setWidth] = useState(initialWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  const [burguer, setBurguer] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])


  return (
    <>
      {
        width > '767' ? (<NavBar></NavBar>) : (<Hamburguer burguer={burguer} setBurguer={setBurguer}></Hamburguer>)
      }
      <Header ></Header>
      <main>
        <AboutMe></AboutMe>
        <Skills></Skills>

          <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  )
}
export default App
