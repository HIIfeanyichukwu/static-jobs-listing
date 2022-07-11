import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Label } from './components'

const Container = styled.div`
    
`

interface Props<T>{
    languages: T[];
    tools: T[];
    role: T;
    level: T;
}

export default function Labels({languages, tools, role, level}: Props<string>) {

    let labels = [...languages, ...tools, role, level]
    let labels_map: any[] = labels.map(label => {
        return <Label key={label}>{label}</Label>
    })
  return (
    <Container>
        {labels_map}
    </Container>
  )
}