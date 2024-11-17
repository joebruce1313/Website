// Simple Chatbot Logic
const chatbotBody = document.getElementById("chatbot-body");
const chatbotInput = document.getElementById("chatbot-input");

chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
        const userMessage = `<p><strong>You:</strong> ${chatbotInput.value}</p>`;
        chatbotBody.innerHTML += userMessage;
        chatbotInput.value = "";

        setTimeout(() => {
            const botMessage = `<p><strong>Bot:</strong> Thank you for reaching out. We'll get back to you shortly!</p>`;
            chatbotBody.innerHTML += botMessage;
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 1000);
    }
});
