import React from 'react';
import { useChatWindowHooks } from './chatWindowHooks'

export function ChatWindow () {
    const {showMessage, init, sendMessage} = useChatWindowHooks()

    return (
        <div className="chatWindow">
            <div className="conversation">
                <pre id="messages"></pre>
            </div>
            <textarea className="textArea" id="messageBox" placeholder="Napisz wiadomość...">

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
