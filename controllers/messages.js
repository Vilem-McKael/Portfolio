module.exports= {
    sendMessage
}

const Mailjet = require('node-mailjet')

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
)

async function sendMessage (req, res){

    try {

        console.log(req.body)
        console.log(req)

        const params = {
            name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            message: req.body.message
        }

        const content = params.name + ' ' + (params.company ? 'from ' + params.company + ' ' : '') + 'sent a message to you via your portfolio. The message is as follows: ' + params.message + '\nYou can reach them at ' + params.email

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
                        Subject: "Portfolio: New Message from " + params.name,
                        TextPart: content
                    }
                ]
            })

        request
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