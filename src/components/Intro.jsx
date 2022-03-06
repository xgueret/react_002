import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes'
import Button from './Button'

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`
const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`
const Phone = styled.div`
  color: #f0667d;
  font-weight: bold;
`
const ContactText = styled.div`
  color: gray;
  margin-top: 5px;
`

const Right = styled.div`
  width: 40%;
`
const Image = styled.img`
  height: 100%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Intro
