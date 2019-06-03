import React, { Component } from 'react'
import { connect } from 'react-redux';


class SongList extends Component {
    render() {
        console.log(this.state)
        return (
            <div>
                <h4>Song List</h4>
            </div>
        );
    };
};


/* Passo 06 - Chamar o connect() do react-redux dentro do(s) componente(s)
onde se deseja usar Redux.
*/
export default connect()(SongList) ;
/*
    A sintaxe acima é o que se chama de "Higher Order Components"
    e seria o equivalente a fazer:

    function connect() {
        return function() {
            return songlist
        }
    }
*/