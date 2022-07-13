import React from 'react'
import styled from 'styled-components'
import { Filtered, FilterItem, Close } from './components'
const Container = styled.div`
    background-color: #fff;
    padding-block: .8rem;
    padding-inline: 1.5rem;
    display: flex;
    gap: .5rem;
    max-inline-size: 1000px;
    margin: 0 auto;
    /* margin-block-end: 2rem; */
    box-shadow: 3px 8px 10px #bee9e9;
    border-radius: 8px;
    position: absolute;
    /* top: 5.5%; */
    bottom: -29.295px;
    /* z-index: 100; */
    left: 1rem;
    right: 1rem;
    @media (min-width: 360px) {
        left: 1.5rem;
        right: 1.5rem;
    }
    
    @media (min-width: 768px) {
        left: 1rem;
        right: 1rem;

    }

    .clear {
        margin-inline-start: auto;
        border: none;
        background-color: transparent;
        color: hsl(180, 29%, 50%);
        font-weight: 700;
        font-size: 1.1rem;
        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    
`
const Labels = styled.div`
    display: flex;
    overflow: auto;
    flex-wrap: nowrap;
    gap: 1rem;

    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        margin-top: 1rem;
        height: .3rem;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);

    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #81c4b8;
        border-radius: 2px;
        width: 1rem;
    }
`

interface Props  {
    filtered: string[];
    setFiltered: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Filter({filtered, setFiltered}: Props) {
  return (
    <Container>
        <Labels>
            {filtered.map(item => {
                return (
                    <Filtered key={item}>
                        <FilterItem>{item}</FilterItem>
                        <Close
                            onClick={(e) => {
                                let target = e.target as Element;
                                target = target.closest("button") as HTMLElement;
                                let text = target.previousElementSibling?.textContent;
                                let filter = [...filtered]
                                filter = filter.filter(item => item != text)
                                setFiltered(filter)
                                console.log(text)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                        </Close>
                    </Filtered>
                )
            })}
        </Labels>
        <button 
            onClick={() => {
                setFiltered([])
            }}
            className="clear"
        >
            Clear
        </button>
    </Container>
  )
}