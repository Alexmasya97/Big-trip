function randomNumber(min, max) {
  if (min < 0 || max < 0) {
    console.log("Ошибка: значения должны быть положительными")
  } else {
    if (min > max) {
      let swap = min;
      min = max;
      max = swap;
    }
    else if (min === max) {
      console.log("Ошибка: не задан диапазон")
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function getRandomFloat(min, max, decimals) {
  if (min < 0 || max < 0 || max < min || min === max) {
  console.log("Ошибка: некорректные значения");
  return null;
  }
  return (Math.random() * (max - min) + min).toFixed(decimals);
  }

