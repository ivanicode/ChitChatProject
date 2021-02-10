import React from 'react';
import {useSendMessage} from './chatWindowHooks'


export function ChatWindow () {
    const {writeMessage, sendMessage, messagesArray, enter} = useSendMessage()
    return (
        <div className="chatWindow">
            <div className="conversationDiv">
                <ul id="messages">{messagesArray.map((message, index) => (
                    <li key={`${index}${message}`}>{message}</li>
                ))}</ul>
            </div>
            <textarea className="textArea" id="messageBox" placeholder="Napisz wiadomość..." onChange={writeMessage} onKeyPress={enter}>

            </textarea>
            <div className="sendMessageButtonDiv">
                <button className="sendMessageButton" id="send" type="button" onClick={sendMessage}>
                wyślij
                </button>
            </div>
        </div>
    );   
}

export default ChatWindow;
