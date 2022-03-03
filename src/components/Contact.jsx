import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PatternBg from '../img/double-bubble-outline.png'
import Button from './Button'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'
import emailjs from '@emailjs/browser'
import { emailConf } from '../myconfig'

const Container = styled.div`
  height: 90%;
  background: url(${PatternBg}) #f3f4f6;
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FormContainer = styled.div`
  width: 50%;
`
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
`
const Form = styled.form`
  margin: 50px;
  height: 300px;
  display: flex;
  align-items: center;
`
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Input = styled.input`
  width: 200px;
  padding: 20px;
`
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        emailConf.service_id,
        emailConf.template_id,
        formRef.current,
        emailConf.user_id
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <LeftForm>
              <Input placeholder="Your name" name="user_name" />
              <Input placeholder="Your email" name="user_email" />
              <Input placeholder="subject" name="user_subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your message" name="message" />
              <Button>Send</Button>
              {done && 'Merci pour le message!'}
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@lama.dev</Text>
            <Text>sales@lama.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact
