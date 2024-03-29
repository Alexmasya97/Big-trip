function randomNumber(numA, numB) {
  if (numA === numB) {
    throw Error('Ошибка: не задан диапазон');
  }
  let min = Math.min(numA, numB);
  let max = Math.max(numA, numB);

  if (min < 0) {
    throw Error('Ошибка: значения должны быть положительными')
  }
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomFloat(numA, numB, decimals) {
  if (numA === numB) {
    throw Error('Ошибка: не задан диапазон');
  }

  let min = Math.min(numA, numB);
  let max = Math.max(numA, numB);

  if (min < 0) {
    throw Error('Ошибка: значения должны быть положительными');
  }

  return (Math.random() * (max - min) + min).toFixed(decimals);
}



