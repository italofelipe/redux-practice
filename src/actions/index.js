// Action Creator

// Passo numero 1 - Criar as Actions da sua aplicação.

/* Nota: Suas actions nao precisam necessariamente 
estarem todas em um só arquivos
*/
export const selectSong = (song) => {
// Retorna uma Action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
