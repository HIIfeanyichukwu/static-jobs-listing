import React from 'react'
import { New, Featured } from './components'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  font-size: 1rem;

  .specials {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

interface Props {
  name?: string;
  recent?: boolean;
  featured?: boolean
}

const Company = ({name, recent, featured}: Props) => {
  return (
    <Container>
      <span className="name">{name}</span>
      <div className="specials">
        {(recent) ? <New>New!</New>: null}
        {(featured) ? <Featured>featured</Featured> : null}
      </div>
    </Container>
  )
}

export default Company