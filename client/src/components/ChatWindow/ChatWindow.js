import React from 'react';

function ChatWindow () {
    return (
        <div className="chatWindow">
            <div className="conversation">
            
            </div>
            <textarea className="textArea">

            </textarea>
            <div className="sendMessageButton">
                <button className="sendMessageButton" type="button">
                wyślij
                </button>
            </div>
        </div>
    );   
}

export default ChatWindow;
