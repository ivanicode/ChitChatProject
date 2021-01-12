import React from 'react';

export function ChatWindow () {
    return (
        <div className="chatWindow">
            <div className="conversation">
            
            </div>
            <textarea className="textArea" placeholder="Napisz wiadomość...">

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
