import React from 'react'
import styled from 'styled-components'
import CompanyInfo from './CompanyInfo'
import Labels from './Labels'

const Container = styled.div`
    & + & {
        margin-block-start: 2.7rem;
    }
    position: relative;
    border-radius: 4px;
    background-color: #fff;
    padding-block: 2.2rem 1rem;
    box-shadow: 3px 8px 18px #bee9e9;
    margin-inline: 1rem;
    padding-inline: 1rem;

    @media (min-width: 360px) {

        margin-inline: 1.5rem;
        padding-inline: 1.5rem;
    }
`

type Props = {
    id: number;
    contract: string;
    dateAgo: string;
    location: string;
    logo: string;
    name: string;
    featured: boolean;
    recent: boolean;
    languages: string[];
    tools: string[];
    role: string; 
    level: string
    position: string;
}



interface AllProps extends Props  {
    key: number;
    setJobs:  React.Dispatch<React.SetStateAction<{
        id: number;
        company: string;
        logo: string;
        new: boolean;
        featured: boolean;
        position: string;
        role: string;
        level: string;
        postedAt: string;
        contract: string;
        location: string;
        languages: string[];
        tools: string[];
    }[]>>;
}


export default function Jobs(props: AllProps) {
  return (
    <Container>
        <CompanyInfo 
            contract={props.contract}
            dateAgo={props.dateAgo}
            location={props.location}
            logo={props.logo}
            name={props.name}
            featured={props.featured}
            recent={props.recent}
            position={props.position}
        />
        <Labels
            languages={props.languages}
            level={props.level}
            role={props.role}
            tools={props.tools} 
        />
    </Container>
  )
}