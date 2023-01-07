import React, {useState} from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import {Box} from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    function inputNum(e){
        let input = e.target.value
        if(input === true){
            num = input
        }
        if(num === 0){
        setNum(input);
        }else{
            setNum(num + input)
        }
    }   
    function clear(e) {
        setNum(0)
    }

    function percent(){
        setNum(num/100)
    }

    function changeSign() {
        if(num>0) {
            setNum(-num)
        }else{
            setNum(num*-1)
        }
    }
    function calculate() {
        if(operator === '+'){
            setNum(parseFloat(oldnum) + parseFloat(num))
        } else if(operator === '-'){
            setNum(parseFloat(oldnum) - parseFloat(num))
        } else if(operator === "*") {
            setNum(parseFloat(oldnum)* parseFloat(num)) 
        } else {
            setNum(parseFloat(oldnum) / parseFloat(num))
        }
    }

    function operatorHandler(e){
        let operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
        console.log(num)
    }

    return (
    <div>
        <Box m="5"/>
        <div style={{marginTop:"3em"}}></div>
        <Container className='wrapper' maxWidth='xs' >
        <div>
            <h1 className="result">{num}</h1>
            <button className="gray" onClick={clear}>AC</button>
            <button className="gray" onClick={changeSign}>+/-</button>
            <button className="gray" onClick={percent}>%</button>
            <button className="gray" onClick={operatorHandler} value={"/"}>/</button>
            <button className="darkGrey" onClick={inputNum} value={7}>7</button>
            <button className="darkGrey" onClick={inputNum} value={8}>8</button>
            <button className="darkGrey" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operatorHandler} value={"*"}>X</button>
            <button className="darkGrey"onClick={inputNum} value={4}>4</button>
            <button className="darkGrey" onClick={inputNum} value={5}>5</button>
            <button className="darkGrey" onClick={inputNum} value={6}>6</button>
            <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
            <button className="darkGrey" onClick={inputNum} value={1}>1</button>
            <button className="darkGrey" onClick={inputNum} value={2}>2</button>
            <button className="darkGrey" onClick={inputNum} value={3}>3</button>
            <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
            <button className="darkGrey zero" onClick={inputNum} value={0}>0</button>
            <button className="darkGrey" onClick={inputNum} value={"."}>.</button>
            <button className="orange" onClick={calculate}>=</button>
            </div>
            </Container>
     </div>
    )
}

