import React, {useState,useEffect,useRef} from 'react'
import styled, { css } from 'styled-components';
import { Fragment } from 'react';
// const Button = styled.button``
import {Dropdown } from "../Dropdown/index"
import SearchImg from "../../assets/images/Search.png"
import Bg from "../../assets/images/bg.jpg"
import Bg1 from "../../assets/images/bg1.jpg"


const Button = styled.div<{selected:boolean}>`
  transition: all 1s;
  width:34%;
  height:91px;
  position:relative;
  display:flex;
  ${props =>
    props.selected &&
    css`
        border-radius:25px;
        border:1px solid red;
    `};
  `

const Container = styled.div`
    width:785px;
    display:flex ;
    align-items:center;
    justify-content:center;
    position:absolute;
    bottom:15%;
    background-color:black;
    border-radius:25px;
    border:2px solid rgba(139, 161, 190, 0.2);
`

const SearchDiv = styled.div<{selectedIndex:number}>`
    display:flex;
    flex-direction:column ;
    align-items:center;
    width:100%;
    height:100%;
    position:relative;
    background-image: url(${Bg}) ;
    background-repeat:no-repeat ;
    background-size:100% 100%;
    transition-property: background-image;
    /* transition-timing-function: ease-in-out; */
    transition-duration: 3s;
    /* ${props =>
    props.selectedIndex &&
    css`
        transition:background-image 2s;
        background-image: url(${Bg1}) ;
    `}; */
`
const P = styled.p`
    font-weight: 400;
    font-size:15px;
    opacity:0.5;
    margin:2px;
    color:white;
`
const Childdiv = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:20px;
    justify-content:center;
`

const ModifiedButton = styled(Button)`
    justify-content:space-around ;
    align-items:center ;
`
const SearchButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center ;
    width:75px;
    background: #E6007A;
    color:white;
    border-radius:15px;
    height:45px;
    cursor: pointer;
`
const H4 = styled.h4`
    background-image:url;
    text-align:center;
    cursor:pointer;
    color:white;
`

export const Search : React.FC = () => {
    const [selectedIndex,setSelectedIndex] = useState<number>(0)
    const [values,setValues] = useState({
        'token':'Choose token',
        'chain':'Select Chain',
        'Filter':'Filter by Amount'
    })
    const [maxCount,setMaxCount] = useState(0);
    const [minCount,setMinCount] = useState(0);

    const mockData = {'tokens':[{'id':1,'name':"Ethereum",'abbr':"Eth",'isSelected':false},{'id':2,'name':"Ethereum",'abbr':"Eth",'isSelected':false},{'id':3,'name':"Ethereum",'abbr':"Eth",'isSelected':false}],'chains':[{'id':1,'name':"Ethereum Mainnet",'isSelected':false},{'id':2,'name':"Ropsten",'isSelected':false},{'id':3,'name':"Ethereum",'isSelected':false}]}
    const [tokens,setTokens] = useState(mockData.tokens)
    const [chains,setChains] = useState(mockData.chains)

    const ref = useRef<any>()

    useEffect(() => {
        const checkIfClickedOutside = (e : any) => {
        if (selectedIndex && ref.current && !ref.current.contains(e.target)){
            setSelectedIndex(0)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [selectedIndex])

    const handleTokenClick =(index : any)=> {
        setTokens((tokens)=>{
            return tokens.map((token)=>{
                return token.id === index ? {...token,isSelected:true} : {...token,isSelected:false} 
            })
        })
        const newToken = tokens.filter((token)=> token.id === index)
        setValues((values)=>{
            return {...values,'token':newToken[0].name}
        })
        setSelectedIndex(2);
    }

    const handleChainClick =(index : any)=> {
        setChains((chains)=>{
            return chains.map((chain)=>{
                return chain.id === index ? {...chain,isSelected:true} : {...chain,isSelected:false} 
            })
        })
        const newChain = chains.filter((chain)=> chain.id === index)
        setValues((values)=>{
            return {...values,'chain':newChain[0].name}
        })
        setSelectedIndex(3);
    }

    const handleClick = (value : number)=>{
        if(selectedIndex === value) setSelectedIndex(0)
        else setSelectedIndex(value)
    }

    return( 
    <Fragment>
        <SearchDiv selectedIndex={selectedIndex}>
        <Container ref={ref}>
            <Button selected={selectedIndex === 1 && true}>
                <Childdiv>
                    <P>Any token</P>
                    <H4 onClick={()=>handleClick(1)}>{values.token}</H4>
                </Childdiv>
                {selectedIndex === 1 && <Dropdown tokens={tokens} handleTokenClick={handleTokenClick} index={1} />} 
            </Button>      
            <Button selected={selectedIndex === 2 && true}>
                <Childdiv>
                    <P>Any chain</P>
                    <H4 onClick={()=>handleClick(2)}>{values.chain}</H4>
                </Childdiv>
                {selectedIndex === 2 && <Dropdown chains={chains} handleChainClick={handleChainClick} index={2} />}
            </Button>   
            <ModifiedButton selected={selectedIndex === 3 && true}>
                <Childdiv>
                    <P>Any amount</P>
                    <H4 onClick={()=>handleClick(3)}>{values.Filter}</H4>
                </Childdiv>
                <SearchButton onClick={()=>window.location.reload()}>
                    <img style={{width:"20px"}} src={SearchImg}/>
                    <h5>Search</h5>
                </SearchButton>
                {selectedIndex === 3 && <Dropdown maxCount={maxCount} setMaxCount={setMaxCount} minCount={minCount} setMinCount={setMinCount} index={3} />}
            </ModifiedButton>
        </Container>
        </SearchDiv>
    </Fragment>
    )
}
