const TODO_LIST2_INPUT_ITEM = 'TODO_LIST2_INPUT_ITEM';
const TODO_LIST2_INPUT_ID = 'TODO_LIST2_INPUT_ID';
const TODO_LIST2_ADD_ITEM = 'TODO_LIST2_ADD_ITEM';
const TODO_LIST2_DELETE_ITEM = 'TODO_LIST2_DELETE_ITEM';

const defaultState = {
    listItems: [
        {id: 1, text: 'aaaaaaaaa'},
        {id: 2, text: 'bbbbbbbbb'},
        {id: 3, text: 'ccccccccc'}
    ],
    item_text: '',
    item_id: '',
};

export const todoListReducer2 = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_LIST2_INPUT_ITEM:  return {...state, item_text: action.payload}
        case TODO_LIST2_INPUT_ID:
            let x = state.listItems.find(el => el.id === action.payload).text
            return {...state, item_id: action.payload, item_text: x}
        case TODO_LIST2_ADD_ITEM:
            if(state.item_text.length) {
                if(state.item_id){
                    return {
                        ...state, listItems: state.listItems.map(i => {
                            if (i.id === state.item_id) {return {...i, text: state.item_text}}
                            return i;
                        }), item_id: '', item_text: ''
                    }
                }
                else{return {...state, listItems: [...state.listItems, {id: Date.now(), text: state.item_text}], item_text: '',item_id: ''}}
            }
        case TODO_LIST2_DELETE_ITEM:
            return {...state, listItems: state.listItems.filter(x => {return x.id !== state.item_id ? x : null}),item_id: '', item_text: ''}
        default:
            return state;
    }
}

export const inputText = (val) =>({type: TODO_LIST2_INPUT_ITEM, payload: val});
export const inputId = (val) =>({type: TODO_LIST2_INPUT_ID, payload: val});
export const addTodo = ()=>({type: TODO_LIST2_ADD_ITEM});
export const deleteTodo = ()=>({type: TODO_LIST2_DELETE_ITEM});

