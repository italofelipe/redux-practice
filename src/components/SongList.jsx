import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">
            <h3>{song.title}</h3>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/* Passo 07 - Dizer ao connect quais dados nós queremos do Provider(redux store) 
aqui no nosso componente. Faremos isso com mapStateToProps
*/

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
  // Aqui eu estou dizendo que songs será prop do componente, no caso, SongList
};

/* Passo 06 - Chamar o connect() do react-redux dentro do(s) componente(s)
onde se deseja usar Redux.
*/
export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(
  SongList
); /* Passo 08:
    chamar o mapStateToProps como um dos argumentos da função connect(), e
    um objeto como segundo parâmetro. O objeto no segundo parâmetro precisa 
    ter como chave alguma action, e o valor, a action creator. No nosso caso,
    estou usando selectSong como chave (eu criei a chave com o mesmo nome do valor),
    e também como valor, mas note que o valor está chamando o import que fiz no topo 
    do componente. 
 */

/*
    A sintaxe acima é o que se chama de "Higher Order Components"
    e seria o equivalente a fazer:

    function connect() {
        return function() {
            return songlist
        }
    }
*/
