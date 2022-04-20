import React from "react";
import './calculator.css'

export default function Calculator() {
    return (
        <div className="container">
            <div className="background">
                <div className="box">
                    <h1 className="resultado">01</h1>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                    <button>del</button>
                    <button>0</button>
                    <button>.</button>
                    <button>/</button>
                    <button>reset</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    )
}