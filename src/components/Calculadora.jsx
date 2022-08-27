import React from "react";
import { useState } from "react";




export default function Calculadora() {

    //FUNÇÃO PARA CRIAR NÚMEROS DO 1 ATÉ O 9
    const criarNumeros = () => {
        const numeros = [];

        for (let i = 1; i < 10; i++) {
            numeros.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            )
        }

        return numeros;
    }

    //FUNÇÃO PARA CALCULAR
    const calcular = () => {
        setCalc(eval(calc).toString());
    }

    //FUNÇÃO PARA APAGAR
    const apagar = () => {
        if (calc == '') {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }


    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (ops.includes(value) && calc === ''
            ||
            ops.includes(value) && ops.includes(calc.slice(-1)
            )
        ) {
            return;
        }



        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }

    }


    return (
        <div className="projeto">

            <div className="calculadora">
                <div className="display">
                    {result ? <span>({result})</span> : ''}
                    {calc || "0"}
                </div>


                <div className="operadores">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={apagar}>DEL</button>
                </div>

                <div className="numeros">
                    {criarNumeros()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calcular}>=</button>
                </div>
            </div>

        </div>
    )
}