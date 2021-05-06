import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Home/Home'
import {hobby} from '../RegisterProfile/dictionary';

export function useProfileHooks(){
    const { partnerData } = useContext(MyContext)

    const [age, setAge] = useState();
    const [hobbys, setHobbys] = useState([])

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