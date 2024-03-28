function randomNumber(a, b) {
  if (b < a) {
    c = b; b = a; a = c;
  };
  let arr = [];
  for (i = 0; i <= (b - a); i++) {
    arr[i] = [Math.random(), a + 1]
  };
  return arr.sort()[0][1]
}
function getRandomFloat(min, max, decimals) {
  if ((min < 0 || max < 0)) {
    console.log("Ошибка: значения должны быть положительными")

  } else {
    let randomFloat = Math.random() * (max - min) + min;
    let roundedFloat = randomFloat.toFixed(decimals);
    return roundedFloat;
  }
}

