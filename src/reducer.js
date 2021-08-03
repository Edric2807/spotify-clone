export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAamIb5qt-3ZhBvq6TJo_ul6d3rNejfee5SGiQhVaMQI4vFq7…XicWUlGj8a2CmEx9yotqw7AD1AZQi-P0UrotwxVLSp4wtSVCZ",
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: action.user,
          };

        case 'SET_TOKEN':
          return {
            ...state,
            token: action.token,
          };

        case 'SET_PLAYLISTS':
          return {
            ...state,
            playlists: action.playlists,
          };

        default:
            return state;
    }
}

export default reducer;