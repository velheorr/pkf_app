const SET_LOGIN = 'SET_LOGIN'

const defaultState = {
    isAuth: false,
    editor: {
        login: 'admin',
        password: '1234'
    },
    authUser: [
        {id: 1, displayName: 'Коломиец Юрий', login: 'admin', password: '1234'},
        {id: 2, displayName: 'Светлана Кучина', login: 's.kuchina', password: '1234'}
    ],
    authedName: null,


};

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            let y = action.payload;
            let x = state.authUser.find(x => x.login === y.login)
            if (x && y.login === x.login && y.password === x.password) {
                return {...state, isAuth: true, authedName: x.displayName}
            }


        default:
            return state;
    }
}


export const setLogin = (val) => ({type: SET_LOGIN, payload: val})

