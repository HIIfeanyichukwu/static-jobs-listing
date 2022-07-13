import React, { useContext } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Label } from './components'
import { JobCtx } from './Job'
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


export default function Labels() {

    const job = useContext(JobCtx)

    const handleLabelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let target = e.target as HTMLButtonElement;
        if (!job?.filtered.includes(target.textContent as string)) {
            job?.setFiltered([...job?.filtered,target.textContent as string])
        }
        return
    }   

    let labels = [job?.role, job?.level,...(job?.languages == undefined ? []: job.languages), ...(job?.tools == undefined ? []: job.tools)]
    let labels_map = labels.map(label => {
        return (
            <Label 
                key={label}
                onClick={handleLabelClick}
            >{label}
            </Label>
        ) 
    })
  return (
    <Container>
        {labels_map}
    </Container>
  )
}