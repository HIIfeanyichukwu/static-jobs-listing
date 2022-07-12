import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'

import { Details } from './Details'
import Company from './Company'
import { Position, Logo } from './components'

const Container = styled.div`
  border-block-end: 1px solid #acbdbd;

  @media (min-width: 768px) {
    border-block-end: none;
  }

  @media (min-width: 900px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`

interface Props {
  name: string;
  featured?: boolean;
  recent?: boolean;
  dateAgo: string;
  location: string;
  contract: string;
  logo: string;
  position: string;
}

function CompanyInfo({logo, name, featured, recent, dateAgo, location, contract, position}: Props) {
  return (
    <Container>
      <Logo>
        <img src={logo} alt={`${name} company logo`} />
      </Logo>
      <section className="company-about-section">
        <Company name={name} featured={featured} recent={recent}/>
        <Position>{position}</Position>
        <Details dateAgo={dateAgo} contract={contract} location={location}/> 
      </section>
    </Container>
  )
}

export default CompanyInfo