const { Kafka } = require("kafkajs");

run().then(() => console.log("Done"), err => console.log(err));

async function run() {

    // Kafka Producer configuration , bootstrap-server details from OCP
    const kafka = new Kafka({ brokers: ["localhost:29092"] });

    const producer = kafka.producer();
     await producer.connect();

     producer.send({
         // Kafka topic name to which the applciation will produce the message .
        topic: "email-topic",
         // Message in JSon format .
        messages: [
            { value: "{\"meetingId\":\"SGML\"," +
                    "\"message\":{\"body\":\"Hi , Please Accept the Meeting\"," +
                    "\"fromEmail\":\"abhishek@gmail.com\"," +
                    "\"toEmail\":\"hello.x.vishnoi@goindigo.in\"," +
                    "\"subject\":\"Meeting Invite\"}," +
                    "\"meetingDate\":\"05-02-1990\"}" },
        ]
    });
}