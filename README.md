# AI Chatbot Selector
This project is a simple web application that allows users to select and interact with different AI chatbots to draft a cohesive Research Paper. The project is composed of three main files:

- `index.html`
- `main.js`
- `style.css`

### `index.html`
This is the main HTML file that structures the web page. It includes a dropdown menu for selecting a chatbot and a container where the selected chatbot will be displayed.

The dropdown menu is implemented as a `select` element with the id `chatbot-selecto`r. The `onchange` attribute is set to call the `showChatbot` function (defined in `main.js`) with the value of the selected option.

The chatbot display area is a `div` element with the id `chatbot-container`.

### `main.js`
This JavaScript file contains the logic for displaying the selected chatbot in the `chatbot-container` div. The `showChatbot` function is expected to be defined in this file.

### `style.css`
This CSS file contains the styles for the web page. The body of the page is styled to be a centered flex container. The `.button-container` class is used to style the container of the chatbot selector dropdown. The `#chatbot-selector` id is used to style the chatbot selector dropdown itself.
