
const BASE_URL = "http://localhost:8000";

export const LOGIN = BASE_URL+"/api/login_check";

export const GETALL_POST = BASE_URL+"/posts";

export const INFORMATION_PROFILE = (email) => {
    return BASE_URL+"/user/get/"+email;
}

export const GET_MESSAGE_FOR_CANAL = (id) => {
    return BASE_URL+"/api/message/get/"+id;
}

export const CREATE_MESSAGE_FOR_CANAL = BASE_URL+"/api/message/create";

export const CREATE_USER = BASE_URL+"/mail/createUser";
