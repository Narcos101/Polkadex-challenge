import React from 'react'
import styled, { css } from 'styled-components';

const ChainInput = styled.div<{selected:boolean}>`
    position:relative;
    width:90%;
    margin:10px;
    padding:4px;
    border-radius:10px;
    min-height:35px;
    border:2px solid #eee;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:6px;
    cursor:pointer;
    ${(props)=> props.selected &&
      css`border:1px solid black;`
    }
`


const Checkmark = styled.div<{selected:boolean}>`
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 6px;
    width: 6px;
    background-color: #eee;
    border-radius: 50%;
    margin-right:3px;
    ${(props)=> props.selected &&
      css`background-color:#E6007A;`
    }
`

const CheckmarkDiv = styled.div`
    display:flex;
    align-items:center ;
    padding:2px;
`

const SelectButton = styled.button<{selected:boolean}>`
    width:48px;
    height:25px;
    padding:2px;
    margin:2px;
    border-radius:6px;
    color: rgba(130, 130, 130, 1);
    border:none;
    cursor:pointer;
    ${(props)=> props.selected &&
      css`background-color:#E6007A;
        color:white;
      `
    }
`


export const Chain = ({chain,handleClick} : any) => {
  return (  
    <ChainInput selected={chain.isSelected} onClick={handleClick}>
        <CheckmarkDiv>
            <Checkmark selected={chain.isSelected}></Checkmark>
            <h5>{chain.name}</h5>
        </CheckmarkDiv>
        <SelectButton selected={chain.isSelected}>Select</SelectButton>
    </ChainInput>
  )
}
