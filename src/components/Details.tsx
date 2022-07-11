import React from 'react'
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
const Container = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5;
  gap: .25rem;
  font-weight: 500;
  color: hsl(180, 8%, 52%);
  margin-block-end: 1rem;
`

interface Props {
  dateAgo: string;
  contract: string;
  location: string;
}

export const Details = ({dateAgo, contract, location}: Props) => {
  return (
    <Container>
      <span className="dateAgo">{dateAgo}</span>
      <BsDot/>
      <span className="contract">{contract}</span> <BsDot/>
      <span className="location">{location}</span>
    </Container>
  )
}