/*import { useFetch } from '../../common/hooks/useFetchHook'

function getRandomIntInclusive(min, max) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }  while (randomNumber === getRandomIntInclusive.last)
  getRandomIntInclusive.last = randomNumber

  return randomNumber;
}

const {data} = useFetch('/api/user/details');
const {data: accountData} = useFetch('/api/user')

export const interestsPairingObject = {
  1: null,
  2: data?.interests,
  3: data?.interests.split(',')[0],
  4: data?.interests.split(',')[1],
  5: data?.interests.split(',')[2]
}

const genderPairingObject = {
  1: null,
  2: 2,
  3: 1,
  4: 3
}

const agePairingObject = {
  1: null,
  2: accountData?.birth
}*/