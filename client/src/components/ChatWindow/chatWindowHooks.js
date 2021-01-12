import { useState } from "react"

export function useChatWindowHooks(){
    const {sendMessage, message } = useSendMessage()

    return {
        sendMessage,
        message
    }
}

export function useSendMessage(){
    const [message, setMessage] = useState('')

    function sendMessage(event){
        const textMessage = event.target.value;
        setMessage(textMessage)

        return console.log(message)
    }

    return { sendMessage, message }
}
