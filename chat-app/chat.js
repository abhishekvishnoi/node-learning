const chatOutput = "My name is abhishek!";
const userInput = "What is your name";

function appendMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;
    messageContainer.innerHTML = `<strong>${sender}: </strong>${message}`;
    chatOutput.appendChild(messageContainer);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        appendMessage('User', message);

        // Emulate bot response (You can use APIs like GPT-3 to get actual responses)
        setTimeout(() => {
            const botResponse = 'This is the bot response.';
            appendMessage('Bot', botResponse);
        }, 500);
    }
    userInput.value = '';
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
