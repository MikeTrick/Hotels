const computerCase = (num) => {
  const baseWord = 'компьютер'
  const endIndex = num % 10
  if ((num >= 11 && num <= 14) || endIndex === 1 ) return baseWord
  if (endIndex >= 2 && endIndex <= 4) return `${baseWord}а`
  return `${baseWord}ов`
}

//Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже,
//соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».