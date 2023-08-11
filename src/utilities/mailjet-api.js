import sendRequest from "./send-request";

const BASE_URL = '/api/messages'
const NETLIFY_URL = '/.netlify/functions/sendMessage'

export function sendMessage(formData) {
    console.log(formData)
    return sendRequest(BASE_URL, 'POST', formData)
}

export function sendMessageNetlifyServerless(formData) {
    console.log(formData)
    return sendRequest(NETLIFY_URL, 'POST', formData)
}