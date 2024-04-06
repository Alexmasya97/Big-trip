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

const formattedNumber = String(randomNumber(1, 9)).padStart(2, '0'); // добавляем ноль перед числами от 1 до 9

const author = {
  avatar: `img/avatars/user${formattedNumber}.png`
};

function getRandomArrayElement(elements) {
  return elements[randomNumber(0, elements.length - 1)]
}

function createOffer() {
  return {
    title: 'Wonderful house with a view',
    address: `{{location.lat}}, {{location.lng}}`,
    price: randomNumber(100, 1000),
    type: getRandomArrayElement(['palace', 'flat', 'house', 'bungalow', 'hotel']),
    rooms: Math.floor(Math.random() * 5) + 1,
    guests: Math.floor(Math.random() * 10) + 1,
    checkin: getRandomArrayElement(['12:00', '13:00', '14:00']),
    checkout: getRandomArrayElement(['12:00', '13:00', '14:00']),
    features: getRandomArrayElement(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
    description: 'This beautiful house offers breathtaking views of the surrounding nature.',
    photos: [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ],
  };
}
console.log(createOffer());


let location = {
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000,5),
}

