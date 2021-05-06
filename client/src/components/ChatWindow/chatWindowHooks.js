import { useState } from "react"
import { io } from 'socket.io-client';
import { useFetch } from '../../common/hooks/useFetchHook';


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
  const {data} = useFetch('/api/user/conversations');
  const socket = io('http://localhost:8082', {
    transports: ['websocket']
  });
  
  function sendMessage(event){
    
    if(textMessage){
      socket.emit('chat message', [textMessage, document.cookie.slice(5)])
      setTextMessage('');
      console.log(textMessage)
      const newMessageArray = [...messagesArray];
      newMessageArray.push(textMessage);
      setMessagesArray(newMessageArray);
    }

    socket.on('chat message', function(msg) {
      console.log('mg:', msg)
      
      
      //window.scrollTo(0, document.body.scrollHeight);
    });
    
    
  }
  function enter(event){
    if(event.key.toLowerCase() === 'enter'){
      sendMessage()
    }
  }
  function writeMessage(event){
    const message = event.target.value;
    setTextMessage(message)
  }
  /*socket.on('chat message', function(msg) {
      
    console.log("socket.on", msg)
  });*/
    return {writeMessage, sendMessage, messagesArray, enter}
    
}


