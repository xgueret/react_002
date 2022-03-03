import styled from 'styled-components'
import Contact from './components/Contact'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Price from './components/Price'
import Service from './components/Service'
import {
  IntroShape,
  FeatureShape,
  ServiceShape,
  PriceShape,
} from './components/Shapes'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false
  return (
    <>
      <Navbar />
      <Container id="intro">
        <Intro />
        <IntroShape />
      </Container>
      <Container id="feature">
        <Feature />
        <FeatureShape />
      </Container>
      <Container id="service">
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container id="price">
        <Price />
        <PriceShape />
      </Container>
      <Container id="contact">
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
