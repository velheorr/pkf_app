

const INIT_LIST = 'INIT_LIST';

const defaultState = {
    list: [
        {id: 1,shop: 'Ленина, 94', phone: '237-00-12', email: 'len94@pkf.perm.ru'},
        {id: 2,shop: 'Белинского,59', phone: '281-02-26', email: 'beli59@pkf.mail.ru'},
        {id: 3,shop: 'Б.Гагарина, 83', phone: '261-77-91', email: 'gag83@pkf.perm.ru'},
        {id: 4,shop: 'Чкалова, 38', phone: '+7(912) 59-19-113', email: 'chka38@pkf.perm.ru'},
        {id: 5,shop: 'Мира, 81', phone: '226-81-01', email: 'mira81pk@mail.ru'},
        {id: 6,shop: 'Докучаева, 24', phone: '213-75-05', email: 'dok24@pkf.perm.ru'},
        {id: 7,shop: 'Борчанинова, 5', phone: '236-20-00', email: 'bor5@pkf.perm.ru'},
        {id: 8,shop: '25 Октября, 17', phone: '+7(912) 59-19-116', email: '25ok17@pkf.perm.ru'},
        {id: 9,shop: 'Тургенева, 25', phone: '265-95-21', email: 'tur25@pkf.perm.ru'},
        {id: 10,shop: 'Мильчакова, 4', phone: '224-44-02', email: 'mil4@pkf.perm.ru'},
        {id: 11,shop: 'М.Рыбалко, 96', phone: '8912-59-16-295', email: 'ryb96@pkf.perm.ru'},
        {id: 12,shop: 'Малкова, 16', phone: '238-04-04', email: 'mal16@pkf.perm.ru'},
        {id: 13,shop: 'Комсомольский проспект, 17', phone: '212-00-81', email: 'kom17@pkf.perm.ru'},
        {id: 14,shop: 'Некрасова, 35', phone: 'ххх', email: 'nekr35@pkf.perm.ru'},
    ],

};

export const permCandyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INIT_LIST:
            return { ...state, list: action.payload}
        default:
            return state;
    }
}

export const setInitList = (list) => ({type: INIT_LIST, payload: list})
