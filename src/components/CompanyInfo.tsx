import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'

import { Details } from './Details'
import Company from './Company'
import { Position, Logo } from './components'

const Container = styled.div`
    
`

interface Props {
  name: string;
  featured?: boolean;
  recent?: boolean;
  dateAgo: string;
  location: string;
  contract: string;
  logo: string;
}

function CompanyInfo({logo, name, featured, recent, dateAgo, location, contract}: Props) {
  return (
    <Container>
      <Logo>
        <img src={logo} alt={`${name} company logo`} />
      </Logo>
      <section className="company-about-section">
        <Company name={name} featured={featured} recent={recent}/>
        <Position>Senior FrontEnd Developer</Position>
        <Details dateAgo={dateAgo} contract={contract} location={location}/> 
      </section>
    </Container>
  )
}

export default CompanyInfo