import React from "react";

class ClassKomponen extends React.Component {
    // Belajar state
    state = {
        angka: 0
    }

    tambah = () =>{
        this.setState({angka: this.state.angka + 1})
    }
    kurang = () =>{
        if(this.state.angka > 0){
            this.setState({angka: this.state.angka - 1})
        }
    }
    render() {
        return (
            <div>
                <h1>Belajar Class Komponen</h1>
                <h2>Props Dalam Class: Hallo {this.props.nama} </h2>
                {/* Untuk State */}
                <br />
                <h2>belajar state dalam class</h2>
                <button onClick={this.kurang}> - </button>
                <span>{` `}{this.state.angka}{` `}</span>
                <button onClick={this.tambah}> + </button>
            </div>
        )
    }
}
export default ClassKomponen;