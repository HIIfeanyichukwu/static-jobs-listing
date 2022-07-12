import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Label } from './components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block-start: 1rem;
    margin-inline-start: auto;

    @media (min-width: 768px) {
        margin-block-start: 0;
    }
`

interface Props<T>{
    languages: T[];
    tools: T[];
    role: T;
    level: T;
}

export default function Labels({languages, tools, role, level}: Props<string>) {

    let labels = [role, level,...languages, ...tools]
    let labels_map: any[] = labels.map(label => {
        return <Label key={label}>{label}</Label>
    })
  return (
    <Container>
        {labels_map}
    </Container>
  )
}