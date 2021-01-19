import { useState } from "react"

export function useChatWindowHooks(){
    const {showMessage, init, sendMessage} = useSendMessage()

    return {
        showMessage, init, sendMessage
    }
}

export function useSendMessage(){
    
    const conversationState = [
        {id: 1, content: "Hej", sender: "Maja"}, 
        {id: 2, content: "No hej", sender: "Kasia"},
        {id: 3, content: "Odrobiłaś lekcje?", sender: "Maja"},
        {id: 4, content: "Nie jeszcze", sender: "Kasia"},
        {id: 5, content: "To szlaban", sender: "Maja"},
    ]

    const [ message, setMessage] = useState(conversationState)

    let ws;

    function showMessage(message) {
      document.getElementById(messages).textContent(`\n\n${message.content}`)
    }

    function init() {
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }

      ws = new WebSocket('ws://localhost:6969');
      ws.onopen = () => {
        console.log('Connection opened!');
      }
      ws.onmessage = ({ data }) => showMessage(data);
      ws.onclose = function() {
        ws = null;
      }
    }

    function sendMessage() {
      if (!ws) {
        showMessage("No WebSocket connection :(");
        return ;
      }

      ws.send(messageBox.value);
      showMessage(messageBox.value);
    }

    return {showMessage, init, sendMessage}
  }


