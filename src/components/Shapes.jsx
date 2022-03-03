import styled, { css } from 'styled-components'

const Shape = css`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`

export const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(65% 0%, 100% 0%, 100% 100%, 47% 100%);
  background-color: crimson;
`
export const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 47% 0%, 30% 100%, 0% 100%);
  background-color: pink;
`

export const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 30% 0%, 30% 100%, 0% 100%);
  background-color: #f88497;
`

export const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`
