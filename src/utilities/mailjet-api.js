import sendRequest from "./send-request";

const BASE_URL = '/api/messages'

export function sendMessage(formData) {
    console.log(formData)
    return sendRequest(BASE_URL, 'POST', formData)
}

export function sendMessageNetlifyServerless(formData) {
    return 
}