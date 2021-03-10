const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

const defaultState = {
    modalTitle: '',
    modalBody: '',
    modalState: false,
    modalWidth: null,
    defaultWidth: {maxWidth: 600}

};


export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            !action.modalWidth ? state.modalWidth = state.defaultWidth : state.modalWidth = {maxWidth: action.modalWidth}
            return {...state, modalState: true, modalTitle: action.modalTitle, modalBody: action.modalBody, modalWidth: state.modalWidth}
        case MODAL_CLOSE:
            return {...state, modalState: false, modalTitle: '', modalBody: ''}
        default:
            return state;
    }
}


export const modalOpen = (modalTitle, modalBody, modalWidth) => ({type: MODAL_OPEN, modalTitle, modalBody, modalWidth})
export const modalClose = () => ({type: MODAL_CLOSE})