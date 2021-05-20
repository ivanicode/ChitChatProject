import { useEffect, useState } from 'react';
import { useGetMyContext } from '../Home/Home';

import {hobby} from '../RegisterProfile/dictionary';

export function useProfileHooks(){

    const { partnerData } = useGetMyContext()
    const [age, setAge] = useState();
    const [hobbys, setHobbys] = useState([])
    console.log('Hello')
    useEffect(() => {
        if(partnerData?.birth_date){
            const now = new Date();
            const birthDate = new Date(partnerData.birth_date)
            setAge(now.getFullYear() - birthDate.getFullYear())
        }
        if(partnerData?.interests){
            const chosenHobbys = partnerData.interests;
            setHobbys(hobby.filter((element) => chosenHobbys.includes(element.id)).map(el => el?.label))
        }
    }, [partnerData])

    return {age, partnerData, hobbys}
}