import React, { useState } from "react";
import './calculator.css'

export default function Calculator() {
    const [num, setNum] = useState('')
    const tela = document.querySelector('.resultado')

    function inputNum (e) {
        var input = e.target.value
        setNum(num + input)
    }

    function clear () {
        setNum('')
    }

    function back () {
        setNum(num.substring(0, num.length -1))
    }

    function calcular () {
        let resultado = tela.innerHTML;
        if(resultado){
            tela.innerHTML = eval(resultado);
        }
    }
    return (
        <div className="container">
            <div className="background">
                <div className="box">
                    <h1 className="resultado">{num}</h1>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={inputNum} value={"+"}>+</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={inputNum} value={"-"}>-</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={inputNum} value={"*"}>*</button>
                    <button onClick={back}>C</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={"."}>.</button>
                    <button onClick={inputNum} value={"/"}>/</button>
                    <button onClick={clear}>reset</button>
                    <button onClick={calcular}>=</button>
                </div>
            </div>
        </div>
    )
}