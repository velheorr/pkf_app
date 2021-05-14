const TODO_LIST_ADD_ITEM = 'TODO_LIST_ADD_ITEM';
const TODO_LIST_INPUT_ITEM = 'TODO_LIST_INPUT_ITEM';
const TODO_LIST_INPUT_ITEM_ID = 'TODO_LIST_INPUT_ITEM_ID';
const TODO_LIST_UPDATE_ITEM = 'TODO_LIST_UPDATE_ITEM';
const TODO_LIST_DELETE_ITEM = 'TODO_LIST_DELETE_ITEM';


const defaultState = {
    listItems: [
        {id: 1, text: 'aaaaaaaaa'},
        {id: 2, text: 'bbbbbbbbb'},
        {id: 3, text: 'ccccccccc'}
    ],
    newItem: '',
    editItemId: null

};

export const todoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_LIST_ADD_ITEM:
            if(state.newItem.length >0) {
                return {
                    ...state, listItems: [...state.listItems, {id: Date.now(), text: state.newItem}]
                }
            }
        case TODO_LIST_UPDATE_ITEM:
            return {
                ...state, listItems: state.listItems.map(i => {
                    if(i.id === state.editItemId){return { ...i, text: state.newItem}}
                    return i;
                }), editItemId: null, newItem: ''
            }
        case TODO_LIST_INPUT_ITEM:  return {...state, newItem: action.payload}
        case TODO_LIST_INPUT_ITEM_ID:  return {...state, editItemId: action.payload}
        case TODO_LIST_DELETE_ITEM:  return {
            ...state, listItems: state.listItems.filter(x => {return x.id !== state.editItemId?  x : null})
        }

        default:
            return state;
    }
}


export const inputItem = (val) =>({type: TODO_LIST_INPUT_ITEM, payload: val});
export const inputItemId = (val) =>({type: TODO_LIST_INPUT_ITEM_ID, payload: val});
export const addItem = () => ({type: TODO_LIST_ADD_ITEM});
export const updateItem = () => ({type: TODO_LIST_UPDATE_ITEM});
export const deleteItem = () => ({type: TODO_LIST_DELETE_ITEM});