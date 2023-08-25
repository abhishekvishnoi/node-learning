const { SmsClient } = require('@azure/communication-sms');

// This code retrieves your connection string
// from an environment variable.
//const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];

const connectionString = ''

// Instantiate the SMS client.
const smsClient = new SmsClient(connectionString);


async function main() {
    const sendResults = await smsClient.send({
        from: "9810337170",
        to: ["9810337170"],
        message: "Hello World 👋🏻 via SMS"
    });

    // Individual messages can encounter errors during sending.
    // Use the "successful" property to verify the status.
    for (const sendResult of sendResults) {
        if (sendResult.successful) {
            console.log("Success: ", sendResult);
        } else {
            console.error("Something went wrong when trying to send this message: ", sendResult);
        }
    }
}

main();
