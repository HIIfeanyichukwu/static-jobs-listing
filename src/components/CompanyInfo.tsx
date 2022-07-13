import React, { Children, ReactNode, useContext } from 'react'
import styled from 'styled-components'

import { Details } from './Details'
import Company from './Company'
import { Position, Logo } from './components'
import { JobCtx } from './Job'
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


function CompanyInfo() {

  const job = useContext(JobCtx)
  return (
    <Container>
      <Logo>
        <img src={job?.logo} alt={`${job?.company} company logo`} />
      </Logo>
      <section className="company-about-section">
        <Company name={job?.company} featured={job?.featured} recent={job?.new}/>
        <Position>{job?.position}</Position>
        <Details dateAgo={job?.postedAt} contract={job?.contract} location={job?.location}/> 
      </section>
    </Container>
  )
}

export default CompanyInfo