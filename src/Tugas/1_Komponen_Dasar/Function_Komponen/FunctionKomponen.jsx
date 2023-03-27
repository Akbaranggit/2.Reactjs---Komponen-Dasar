import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function FunctionKomponen(props){
    // state
    const [angka, setAngka] = useState(0)

    function kurang(){
        if(angka > 0){
            setAngka (angka - 1);
        }
    }
    function tambah(){
        setAngka (angka + 1);
    }

    return(
        <div>
            <h1>Belajar Function Komponen </h1>
            <h2>Props Dalam Function : Hallo {props.nama} </h2>
            {/* Belajar state */}
            <br />
            <h2>Belajar state dalam function</h2>
            <button onClick={kurang}> - </button>
            <span> {' '}{angka}{' '} </span>
            <button onClick={tambah}> + </button>
        </div>
    )
}
FunctionKomponen.propTypes = {
    nama: PropTypes.string
}
export default FunctionKomponen;