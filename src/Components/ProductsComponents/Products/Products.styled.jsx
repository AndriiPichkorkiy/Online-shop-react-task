import styled from "styled-components";


export const CardList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Card = styled.li`
  width: 25%;
  max-width: ${({ short }) => short ? "15%" : "unset"};
  border-color: #B9B7BD;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin: 2rem;
  padding: 1rem;

  &:hover{
    background-color: #00000035;

  }

  &:hover > * {
    color: white
  }

`
export const Title = styled.h3`
  color: #4E4F50;
  font-size: 1.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* position: relative; */
  z-index: 1;

  &:hover&:after{
    content:attr(data-text);
    overflow: visible;
    text-overflow: inherit;
    background: #fff;
    position: absolute;
    left: auto;
    top:auto;
    width: auto;
    max-width: 20rem;
    border: 1px solid #eaebec;
    padding: 0 .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.28);
    white-space: normal;
    word-wrap: break-word;
    display:block;
    color:#868B8E;
    margin-top:-1.25rem;
    z-index: 2000;
    transform: translateX(-10%);
  }

`
export const ImageThumb = styled.img`
  height: 200px;
  object-fit: contain;
  object-position: center;
  margin-top: 1rem;
  width: 100%;
`

export const CharTitle = styled.span`
 font-size: 0.8rem;
 color: #E7D2CC;

font-weight: bold;
`
export const CharDesc = styled.span`
 font-size: 0.8rem;
 color: #E7D2CC;
 font-weight: normal;
`

export const Description = styled.p`
  margin-top: 1rem;
  padding-top: 0.5rem;
 border-top: solid grey 1px;
 color: #868B8E;
`
export const PriceTitle = styled.span`
margin-top: 1rem;
display: inline-block;
 color: #E7D2CC;

font-weight: bold;
`
export const PriceDecs = styled.span`
 color: #4E4F50;
 font-weight: normal;
`
export const Rating = styled.p`
color: #868B8E;
 font-size: 0.8rem;
`