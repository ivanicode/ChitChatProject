import {useState} from 'react'
import { getCookieByName } from '../helpers/cookie'

export function useAppHooks(){
    const [userData, setUserData] = useState({})
    return {userData, setUserData, isLoggedIn : !!getCookieByName('user')}
}

