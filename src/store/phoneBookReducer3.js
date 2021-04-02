import {phoneBookApi} from "../api/api";

const PHONE_BOOK_SET_LIST = "PHONE_BOOK_SET_LIST";


const defaultState = {
    list: [],
    finder: '',
    sortedList: null,
    user: [],
};

export const phoneBookReducer3 = (state = defaultState, action) => {
    switch (action.type) {
        case PHONE_BOOK_SET_LIST:
            return {...state, list: action.payload}
        default:
            return state;
    }
}

const setList3 = (list) => ({type: PHONE_BOOK_SET_LIST, payload: list})

export const getList3 = list => async (dispatch) => {
    let response = await phoneBookApi.getPhoneBook(list)
    dispatch(setList3(response.data.data));
}