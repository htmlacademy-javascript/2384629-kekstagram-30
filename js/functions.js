getStringLength = (toCheck, targetLength) => console.log(toCheck.length <= targetLength);
getStringLength('Большие города', 3);

checkReversability = (toCheck) => {
  let lastCheck = toCheck;
  toCheck.split();
  toCheck = [...toCheck].reverse().join('');
  console.log(lastCheck == toCheck);
}
checkReversability('Лошадь');
