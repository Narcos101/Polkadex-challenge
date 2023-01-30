import React from 'react'
import styled, { css } from 'styled-components';
import Eth from "../../assets/images/ETh.png"

  const Tokens = styled.div<{selected:boolean}>`
    display:flex;
    position:relative;
    flex-direction: column;
    align-items:center;
    min-width:130px;
    margin-left:15px;
    border:1px solid rgb(100,100,100,.3);
    border-radius:23px;
    height:150px;
    font-family:'Calibre';
    font-style:normal;
    cursor:pointer;
    ${(props)=> props.selected &&
      css`border:1px solid black;`
    }
    
  `

  const Div = styled.div`
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items:center ;
    justify-content: space-around;
    height:100%;
  `

  const InnerDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center ;
    align-items:center ;
  `
  const H6 = styled.div`
    font-weight:400;
    opacity:0.5;
    font-size:1em;
    text-transform:uppercase ;
  `

  const ImageDiv = styled.div`
    position:relative;
    width:54px;
    height:54px;
    background: #bdbcbc;
    border-radius:15px ;
  `

const HeaderImage = styled.div`
    position: absolute;
    left:17px;
    top:10px;
    background-image: url(${Eth});
    height:30px;
    width:15px;
    background-repeat:no-repeat ;
  `;


export const Token = ({handleClick,token} : any) => {
  return (
      <Tokens onClick={handleClick} selected={token.isSelected}>
          <Div>
              <ImageDiv><HeaderImage /></ImageDiv>
              <InnerDiv>
                  <h4>{token.name}</h4>
                  <H6>{token.abbr}</H6>
              </InnerDiv>
          </Div>
      </Tokens>
  )
}

