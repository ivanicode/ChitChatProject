import { useState } from "react"
import { io } from 'socket.io-client';


export function useChatWindowHooks(){
    const {writeMessage, sendMessage, enter} = useSendMessage()

    return {
      writeMessage,
      sendMessage,
      enter
    }
}

export function useSendMessage(){ 
  const [messagesArray, setMessagesArray] = useState([])
  const [textMessage, setTextMessage] = useState('')
  const socket = io('http://localhost:8082', {
    transports: ['websocket']
  });
  function writeMessage(event){
    const message = event.target.value;
    setTextMessage(message)
  }
  function sendMessage(event){
    if(textMessage){
      socket.emit('chat message', textMessage)
      setTextMessage('');
      const newMessageArray = [...messagesArray];
      newMessageArray.push(textMessage);
      setMessagesArray(newMessageArray);
    }

    socket.on('chat message', function(msg) {
      
      
      
      //window.scrollTo(0, document.body.scrollHeight);
    });
    
    
  }
  function enter(event){
    console.log(event.key)
    if(event.key.toLowerCase() === 'enter'){
      sendMessage()
    }
  }
  /*socket.on('chat message', function(msg) {
      
    console.log("socket.on", msg)
  });*/
    return {writeMessage, sendMessage, messagesArray, enter}
    
}


