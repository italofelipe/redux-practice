import { combineReducers } from 'redux'

/* Passo numero 2 - Criar os Reducers para alimentarem 
sua aplicação com "pedaços do state"
*/ 
export const songsReducer = () => {
    // Esse reducer retornará um Array de objetos correspondentes às musicas
    return [
        { title: 'Equilibrium', artist: 'Tristania', duration: '5:50'},
        { title: 'The Wretched', artist: 'Tristania', duration: '7:01'},
        { title: 'Endogenisis', artist: 'Tristania', duration: '7:03'},
        { title: 'Shadowman', artist: 'Tristania', duration: '6:32'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    // A aplicação começa sem musicas selecionadas, por isso foi passado como argumento
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};


/* Passo numero 3 - Criar uma "réplica do State", que servirá dados a um nivel global, isso é, 
essa réplica do state ficará disponivel para todos os componentes */


/* Nessa função do Redux, as chaves de dentro do 
Objeto serão iguais às chaves que teriam dentro do State dos nossos componentes.
De modo que, se nosso componente tivesse state = { teste: null},
teste deve estar dentro do combinedReducers

*/
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});