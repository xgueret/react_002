import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin: 30px 0;
`
const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button whileHover={{ scale: 0.85 }} transition={{ duration: 0.5 }}>
        Join now
      </Button>
    </Container>
  )
}

export default PriceCard
