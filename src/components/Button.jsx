import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button).attrs(() => ({
  whileHover: { scale: 0.85 },
  transition: { duration: 0.5 },
}))`
  width: ${(props) => `${props.width}` || 'auto'};
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export default Button
