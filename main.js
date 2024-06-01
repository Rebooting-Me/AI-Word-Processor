const chatbots = {
    1: `<iframe
                src="https://udify.app/chatbot/slnzsfc5qQ1K6GAd"
                style="width: 100%; height: 100%; min-height: 700px"
                frameborder="0"
                allow="microphone">
            </iframe>`,
    2: '<iframe src="https://udify.app/chatbot/ANjHJHdrvWSCmGTH" style="width: 100%; height: 100%; min-height: 700px" frameborder="0" allow="microphone"></iframe>',
    3: '<iframe src="https://udify.app/chatbot/mr2h9vfl2t6XjpiR" style="width: 100%; height: 100%; min-height: 700px" frameborder="0" allow="microphone"></iframe>',
    4: `<iframe
                src="https://udify.app/chatbot/QUB0PW6oWfILw6ci"
                style="width: 100%; height: 100%; min-height: 700px"
                frameborder="0"
                allow="microphone">
            </iframe>`,
    5: `<iframe
                src="https://udify.app/chatbot/cnhKcVMGpUnHWlJI"
                style="width: 100%; height: 100%; min-height: 700px"
                frameborder="0"
                allow="microphone">
            </iframe>`,
};

function showChatbot(chatbotId) {
  const chatbotContainer = document.getElementById("chatbot-container");
  chatbotContainer.innerHTML = chatbots[chatbotId];
}
