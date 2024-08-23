// script.js
const apiKey = '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'; // Substitua pela sua API Key

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();

    if (message === '') return;

    // Add user message to chat
    addMessage('user', message);

    // Clear input field
    inputField.value = '';

    // Send message to GPT-3.5
    fetchGPTResponse(message);
}

function addMessage(role, content) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', role);
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function fetchGPTResponse(userMessage) {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].message.content.trim();
        addMessage('bot', botMessage);
    })
    .catch(error => {
        console.error('Error:', error);
        addMessage('bot', 'Desculpe, houve um erro ao processar sua solicitação.');
    });
}
