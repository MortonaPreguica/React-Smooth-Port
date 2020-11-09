import car from '../images/svg-1.svg'
import car2 from '../images/svg-2.svg'
import car3 from '../images/svg-3.svg'
import React,{useState} from  'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection/'
import Services from '../components/Services'
import Footer from '../components/Footer'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} img={car}/>
      <InfoSection {...homeObjTwo} img={car2}/>
      <InfoSection {...homeObjThree} img={car3} />
      <Services />
      <Footer />
    </>
  )
}

export default Home