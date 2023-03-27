import React from "react";
import ClassKomponen from "./Class_Komponen/ClassKomponen";
import FunctionKomponen from "./Function_Komponen/FunctionKomponen";

function Gabung(){
    return(
        <div>
            <FunctionKomponen nama="Akbar Anggit Pambudi" />
            <br />
            <ClassKomponen nama="Budi" />
        </div>
    )
}
export default Gabung;