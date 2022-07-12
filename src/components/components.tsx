import styled from "styled-components";

export const FilterItem = styled.span`
    padding-inline: .5rem;
    padding-block: .5rem;
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    background-color: hsl(180, 31%, 95%);
    font-size: 1rem;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

export const Label = styled.button`
    padding-inline: .5rem;
    padding-block: .5rem;
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    background-color: hsl(180, 31%, 95%);
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    transition: all .25s;
    
    @media (hover: none) {
        color: #fff;
        background-color: hsl(180, 29%, 50%);
    }

    :hover {
        color: #fff;
        background-color: hsl(180, 29%, 50%);
        cursor: pointer;
    }
`

export const New = styled.span`
    background-color: hsl(180, 29%, 50%);
    color: #fff;
    text-transform: uppercase;
    padding-inline: .5rem;
    padding-block: .3rem;
    border-radius: 12px;
    font-size: 1rem;
`

export const Featured = styled.span`
    background-color: hsl(180, 14%, 20%);
    color: #fff;
    text-transform: uppercase;
    padding-inline: .5rem;
    padding-block: .3rem ;
    border-radius: 12px;
    font-size: 1rem;
`

export const Logo = styled.figure`

    img {
        inline-size: 100%;
    }

    width: 50px;
    height: auto;
    position: absolute;
    top: -25px;

    @media (min-width: 900px) {
        width: 75px;
        position: static;
    }

`

export const Position = styled.span`
    color: hsl(180, 14%, 20%);
    font-weight: 700;
    margin-block: .8rem;
    display: block;
    font-size: 1.1rem;

    @media (hover: none) {
        color: hsl(18, 14%, 20%);
    }

    :hover {
        color: hsl(180, 29%, 50%);
    }
`

export const Close = styled.button`
    background-color: hsl(180, 29%, 50%);
    border: none;
    padding: .5rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    :hover {
        background-color: #000;
        cursor: pointer;
    }
`

export const Filtered = styled.div`
    display: flex;
`