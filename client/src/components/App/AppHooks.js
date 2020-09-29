import {useState} from 'react'

export function useAppHooks(){
    const [userData, setUserData] = useState({})
    console.log(userData)
    return {userData, setUserData}
}

