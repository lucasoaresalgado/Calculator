import React, {useState} from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import {Box} from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    function inputNum(e){
        let input = e.target.value
        if(input === true){
            num = input
        }
        setNum(num + input);
    }   
    function clear(e) {
        setNum(0)
    }
    return (
    <div>
        <Box m="5"/>
        <div style={{marginTop:"3em"}}></div>
        <Container className='wrapper' maxWidth='xs' >
        <div>
            <h1 className="result">{num}</h1>
            <button className="gray" onClick={clear}>AC</button>
            <button className="gray">+/-</button>
            <button className="gray">%</button>
            <button className="gray">/</button>
            <button className="darkGrey" onClick={inputNum} value={7}>7</button>
            <button className="darkGrey" onClick={inputNum} value={8}>8</button>
            <button className="darkGrey" onClick={inputNum} value={9}>9</button>
            <button className="orange">X</button>
            <button className="darkGrey"onClick={inputNum} value={4}>4</button>
            <button className="darkGrey" onClick={inputNum} value={5}>5</button>
            <button className="darkGrey" onClick={inputNum} value={6}>6</button>
            <button className="orange">-</button>
            <button className="darkGrey" onClick={inputNum} value={1}>1</button>
            <button className="darkGrey" onClick={inputNum} value={2}>2</button>
            <button className="darkGrey" onClick={inputNum} value={3}>3</button>
            <button className="orange">+</button>
            <button className="darkGrey zero" onClick={inputNum} value={0}>0</button>
            <button className="darkGrey">,</button>
            <button className="orange">=</button>
            </div>
            </Container>
     </div>
    )
}

