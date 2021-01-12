import {hobby} from '../RegisterProfile/dictionary';
import { useFetch } from '../../common/hooks/useFetchHook';
import { useState, useEffect } from 'react'

export function useMyProfileHooks() {
    const [hobbys, setHobbys] = useState([])
    const [age, setAge] = useState()
    const {data: accountData} = useFetch('/api/user')
    const {data} = useFetch('/api/user/details');
    useEffect(() => {
        if(data?.interests){
            const chosenHobbys = data?.interests;
            setHobbys(hobby.filter((element) => chosenHobbys.includes(element.id)).map(el => el?.label))
        }
    }, [data])

    useEffect(() => {
        if(accountData?.birth_date){
            const now = new Date();
            const birthDate = new Date(accountData.birth_date)
            setAge(now.getFullYear() - birthDate.getFullYear())
        }
    }, [accountData])
    return {data, hobbys, age}
}