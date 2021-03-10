import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://192.168.0.171:3001/api/v1/user/`,
});


export const phoneBookApi = {
    getPhoneBook() {
        return instance.get('read')
    },
    savePhoneBook(user) {
        return instance.post('', user)
    },
    updatePhoneBook(userID, user) {
        return instance.patch(userID, user)
    },
    deletePhoneBook(userID) {
        return instance.delete(userID)
    }
}




