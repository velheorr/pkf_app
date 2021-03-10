
const AUTH_AUTHORIZATION = 'AUTH_AUTHORIZATION'
const AUTH_CHECK = 'AUTH_CHECK'

const defaultState = {
    isAuth: false,
    editor: {
        login: 'admin',
        password: '1234'
    }

};

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_AUTHORIZATION: return {...state,isAuth: action.payload}
        default:
            return state;
    }
}

const setAuth = auth => ({type: AUTH_AUTHORIZATION, payload: auth})


export const authentication = (val) => {
    if (val.login === defaultState.editor.login && val.password === defaultState.editor.password)  {
        return setAuth(true)
    }
}
