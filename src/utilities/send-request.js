export default async function sendRequest(url, method = 'GET', payload = null) {
    
    // what type of HTTP request we are replicating
    console.log(payload)
    const options = { method };

    // if we included a specified payload (most likely for token auth)
    if (payload) {
        // options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    console.log(options.body)

    // const token = getToken();

    // if(token) {

    //     options.headers = options.headers || {}; // change this if this breaks
    //     // but ternary ftw

    //     options.headers.Authorization = `Bearer ${token}`;

    // }

    console.log(options)
    const res = await fetch(url, options);

    if (res.ok) return res.json();

    throw new Error('Bad Request');

}