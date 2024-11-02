document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user'); // Display user message
        respondToUser(userInput); // Process user input and respond
        document.getElementById('userInput').value = ""; // Clear input field
    }
});

function displayMessage(message, sender) {
    const messageContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to bottom
}

function respondToUser(message) {
    let botReply = "I'm sorry, I didn't understand that."; // Default response

    // Convert user input to lowercase for easier matching
    const userMessage = message.toLowerCase();

    // Response logic
    if (userMessage === 'hi' || userMessage === 'hello') {
        botReply = 'Hi, how can I help you?';
    } else if (userMessage.includes('popular halls')) {
        botReply = 'Here are some popular halls available: Grand Ballroom, Royal Banquet Hall, and Elegant Pavilion.';
    } else if (userMessage.includes('help')) {
        botReply = 'I can assist you with information about popular halls, reservations, and special offers. What do you need help with?';
    } else if (userMessage.includes('reservations')) {
        botReply = 'You can make reservations for different events. Please tell me the event type and date.';
    } else if (userMessage.includes('special offers')) {
        botReply = 'Currently, we have special offers on wedding packages and corporate events. Would you like to know more?';
    } else if (userMessage.includes('event types')) {
        botReply = 'We host various events such as weddings, birthdays, corporate gatherings, and cultural events. What event are you interested in?';
    } else if (userMessage.includes('location')) {
        botReply = 'Our venue is located in the heart of the city, easily accessible with ample parking. Would you like directions?';
    } else if (userMessage.includes('contact')) {
        botReply = 'You can reach us at contact@yourdomain.com or call us at (123) 456-7890 for any inquiries.';
    } else if (userMessage.includes('gallery')) {
        botReply = 'You can check our gallery section to see images from past events held at our venue. Would you like me to show you the gallery?';
    } else if (userMessage.includes('pricing')) {
        botReply = 'Pricing varies based on the type of event and hall. Please specify your event type, and I can provide you with more details.';
    } else if (userMessage.includes('book now')) {
        botReply = 'To proceed with booking, please provide your name, email, and the date of the event.';
    }

    displayMessage(botReply, 'bot'); // Display bot response
}
