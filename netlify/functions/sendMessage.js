

const Mailjet = require('node-mailjet')

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

async function sendMessage (formData) {

    try {

        const content = formData.name + ' ' + (formData.company ? 'from ' + formData.company + ' ' : '') + 'sent a message to you via your portfolio: \n\n' + formData.message + '\nYou can reach them at ' + formData.email

        const request = mailjet
            .post('send', { version: 'v3.1'})
            .request({
                Messages: [
                    {
                        From: {
                            Email: "portfoliomailjet@gmail.com",
                            Name: "Your Portfolio"
                        },
                        To: [
                            {
                                Email: "vilemckael@gmail.com",
                                Name: "Passenger"
                            }
                        ],
                        Subject: "New Message from " + formData.name,
                        TextPart: content
                    }
                ]
            })

        await request
            .then((res) => {
                console.log(res.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })
        
    } catch (error) {
        
        console.log(error)

    }

    
}

exports.handler = async (event, context) => {
    try {
        const data = JSON.parse(event.body);

        await sendMessage(data);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Email forwarded successfully'
            })
        };

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error: failed to send email'
            })
        }
    }
}