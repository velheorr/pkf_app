import {phoneBookApi} from '../../api/api'

const PHONE_BOOK_SET_LIST = 'PHONE_BOOK_SET_LIST';
const PHONE_BOOK_FINDER = 'PHONE_BOOK_FINDER';
const PHONE_BOOK_FILTER = 'PHONE_BOOK_FILTER';

const defaultState = {
    list: [],
    finder: '',
    sortedList: null,
    user: [],
};

export const phoneBookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PHONE_BOOK_SET_LIST:
            let compare = (a,b) =>{
                /*const AA = a.department.toLowerCase();
                const BB = b.department.toLowerCase();*/
                let res = 0;
                /*if( AA > BB ) {res =1}
                else if (AA < BB) {res = -1}
                return res;*/
                a.department.toLowerCase() > b.department.toLowerCase() ? res = 1 : res = -1
                return res
            }
            let sorted = action.payload.sort(compare)
            return { ...state, list: sorted}
        case PHONE_BOOK_FINDER:  return {...state, finder: action.payload}
        case PHONE_BOOK_FILTER:  return {...state, sortedList: action.payload}
        default:
            return state;
    }
}

export const setList = (list) => ({type: PHONE_BOOK_SET_LIST, payload: list})

export const getList = list => async (dispatch) => {
    let response = await phoneBookApi.getPhoneBook(list)
    dispatch(setList(response.data.data));
}
export const addPBUser = user => async (dispatch) => {
    let response = await phoneBookApi.savePhoneBook(user)
    alert(response.data.msg)
    dispatch(getList());
}
export const updatePBUser = (userId, user) => async (dispatch) => {
    let response = await phoneBookApi.updatePhoneBook(userId, user)
    alert(response.data.msg)
    dispatch(getList());
}

export const setFinder = (finder) => ({type: PHONE_BOOK_FINDER, payload: finder})
export const setSortList = (sortedList) => ({type: PHONE_BOOK_FILTER, payload: sortedList})


