import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import IncDecCounter from '../IncDecCounter.js';
import { Token } from '../Token/index';
import { Chain } from '../Chain';
import { tokenToString } from 'typescript';

const DropdownDiv = styled.div`
        display:inline-block;
        position:absolute;
        bottom:100px;
        z-index:1;
        left:-35px;
        width:20rem;
        height:200px;
        background-color:white;
        border:1px solid black;
        border-radius:25px;
    `
    const P = styled.p`
        display:flex;
        margin-left:15px;
        margin-top:10px;
        margin-bottom:5px;
    `

    const FilterDiv = styled.div`
        margin-top:15px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;

    `
    const TokenDiv = styled.div`
        display:flex;
        align-items:center;
        overflow:scroll;  
        overflow-y:hidden;
        &::-webkit-scrollbar {
           display: none;
        }
    `

    const ChainDiv = styled.div`
        display:flex;
        position:relative;
        flex-direction:column;
        align-items:center ;
        height:150px;
        font-family:'Calibre';
        font-style:normal;
        overflow:scroll;
        &::-webkit-scrollbar {
           display: none;
        }
    `


    const FilterInner = styled.div`
        display:flex;
        justify-content: space-around;
        align-items:center;
        width:100%;
    `

export const Dropdown = ({tokens, index, handleTokenClick,chains,handleChainClick,maxCount,setMaxCount,minCount,setMinCount} : any) => {
    

    const renderSwitch = ()=>{
        switch(index){
            case 1:
                return (<>
                <P>Choose Token</P>
                <TokenDiv>
                    {tokens.map((token:any,index:any)=>{
                        return <Token key={index} handleClick={()=>handleTokenClick(token.id)}  token={token} />
                    })}
                </TokenDiv>
                </>)
                break;
            case 2:
                return (<>
                    <P>Select Chain</P>
                    <ChainDiv>
                        {chains.map((chain:any,index:any)=>{
                            return <Chain key={index} handleClick={()=>handleChainClick(chain.id)} chain={chain} />
                        })} 
                    </ChainDiv>
                </>)
                    break;
            case 3:
                return (<>
                    <P>Filter By Amount</P>
                    <FilterDiv>
                        <FilterInner>
                            <p>Max amount</p>
                            <IncDecCounter num={maxCount} setNum={setMaxCount} />
                        </FilterInner>
                        <br/>
                        <FilterInner>
                            <p>Min amount</p>
                            <IncDecCounter num={minCount} setNum={setMinCount} />
                        </FilterInner>
                    </FilterDiv>
                </>)
                    break;
            default:
                return <></>
        }
    }

  return (
    <DropdownDiv>
        {renderSwitch()}
    </DropdownDiv>        
  )
}
