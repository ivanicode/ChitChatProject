import {useState} from 'react'

export function useAppHooks(){
    const [userData, setUserData] = useState({})
    return {userData, setUserData}
}

