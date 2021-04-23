import {hobby} from '../RegisterProfile/dictionary';
import { useFetch } from '../../common/hooks/useFetchHook';
import { useState, useEffect } from 'react'
import {pairingRelationship} from './pairingDictionary'

export function useMyProfileHooks() {
    const [hobbys, setHobbys] = useState([])
    const [age, setAge] = useState()
    const {data: accountData} = useFetch('/api/user')
    const {data} = useFetch('/api/user/details');
    const [shouldFetchMatch, setShouldFetchMatch] = useState(false)
    const [fetchMatchUrl, setFetchMatchUrl] = useState('')
    const {data: matchData} = useFetch(fetchMatchUrl, shouldFetchMatch);
    
    useEffect(() => {
        if(data?.interests){
            const chosenHobbys = data?.interests;
            setHobbys(hobby.filter((element) => chosenHobbys.includes(element.id)).map(el => el?.label))
        }
        if(data?.relationship){
            setFetchMatchUrl(`/api/user/?relationship=${pairingRelationship[data.relationship]}`)
        }
    }, [data])

    useEffect(() => {
        if(accountData?.birth_date){
            const now = new Date();
            const birthDate = new Date(accountData.birth_date)
            setAge(now.getFullYear() - birthDate.getFullYear())
        }
    }, [accountData])

    function findMatch(event){
        setShouldFetchMatch(true)

    }
    return {data, hobbys, age, findMatch}
}