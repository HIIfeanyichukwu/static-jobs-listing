import { useState } from 'react'
import './styles/App.css'
import styled from 'styled-components'
import bgbig from '/images/bg-header-desktop.svg';
import bgsm from '/images/bg-header-mobile.svg';
import data from '../public/data/data.json'
import Job from './components/Job';
import Filter from './components/Filter'

interface Sorted  {
  id : number;
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
}

const Container = styled.div`
  inline-size: 100%;
  min-block-size: 100vh;
  background-color: hsl(180, 52%, 96%);
  position: relative;


`

const Jobs = styled.div`
  margin-block-end: 2rem;
`

const Banner = styled.div`
  inline-size: 100%;
  background-image: url(${bgsm});
  background-size: cover;
  background-color: hsl(180, 29%, 50%);
  block-size: 10rem;
  margin-block-end: 3rem;
  position: relative;

  @media (min-width: 1024px) {
    background-image: url(${bgbig});
    background-size: cover;
    block-size: 8rem;
  }
`


function App() {
  let filtered: string[] = [];
  const [jobs, setJobs] = useState(data)
  let jobs_map = jobs.map(entry => {
    return (
      <Job 
        key={entry.id}
        id={entry.id}
        contract={entry.contract}
        dateAgo={entry.postedAt}
        featured={entry.featured}
        recent={entry.new}
        location={entry.location}
        logo={entry.logo}
        name={entry.company}
        languages={entry.languages}
        tools={entry.tools}
        role={entry.role}
        level={entry.level}
        setJobs={setJobs}
        position={entry.position}

      />
    )
  })
  return (
    <div className="App">
      <Container>
        <Banner aria-hidden={true}>

          <Filter
            filtered={["frontend", "css"]}
          />
        </Banner>
        <Jobs>
          {jobs_map}
        </Jobs>
      </Container>
    </div>
  )
}

export default App
