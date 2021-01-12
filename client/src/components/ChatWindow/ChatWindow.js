import React from 'react';
import { useChatWindowHooks } from './chatWindowHooks'

export function ChatWindow () {
    const {sendMessage, message } = useChatWindowHooks()

    return (
        <div className="chatWindow">
            <div className="conversation">
            
            </div>
            <textarea className="textArea" placeholder="Napisz wiadomość..." onChange={sendMessage}>

            </textarea>
            <div className="sendMessageButtonDiv">
                <button className="sendMessageButton" type="button">
                wyślij
                </button>
            </div>
        </div>
    );   
}

export default ChatWindow;
