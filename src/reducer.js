export const initialState ={
    user: null,
    playlists:[],
    playing: false,
    item: null,
    //token to be removed after developing
    //token: 'BQDhPOoQqKuavXNN2ojba5ObH7fO5cuIm3-lsL4OWg_w1kCpKrUif68D7j9sKtsAZeKV8QGK449cIMSZqp9bpAirIxM8CgphrnKqG_kU9Hfu4kLMO1UFt9F35YIT4M8d9hJxurU44z4JP1yaFpi5ofYQvJA2GCvYG-9WjhbAgX6z0XpDrkb4',
}

const reducer =(state,action) =>{
console.log(action);

//action has a type and a payload
// action -> type was here set_user and the payload was user
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;