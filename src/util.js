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

function createAuthor() {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // генерируем случайное число от 1 до 10
  const formattedNumber = String(randomNumber).padStart(2, '0');
  const avatar = `img/avatars/user${formattedNumber}.png`; // создаем уникальный адрес изображения
  return avatar;
}
const authorAvatar = createAuthor();

function getRandomArrayElement(elements) {
  return elements[randomNumber(0, elements.length - 1)]
}

function generateFeatures() {
  const features = [];
  const possibleValues = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
  const length = Math.floor(Math.random() * possibleValues.length) + 1;
  const chosenFeatures = new Set();

  while (chosenFeatures.size < length) {
    const randomFeature = getRandomArrayElement(possibleValues);
    chosenFeatures.add(randomFeature);
  }

  return Array.from(chosenFeatures);
}

function createOffer() {

  let location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  }

  return {
    title: getRandomArrayElement([
      'Wonderful house with a view',
      'SleepyCrew Hub',
      'Walkabout Beach Hotel',
      'Sun and Sand Hotel',
      'Dream Desert Hotel',
    ]),
    address: location,
    price: randomNumber(100, 1000),
    type: getRandomArrayElement(['palace', 'flat', 'house', 'bungalow', 'hotel',]),
    rooms: Math.floor(Math.random() * 5) + 1,
    guests: Math.floor(Math.random() * 10) + 1,
    checkin: getRandomArrayElement(['12:00', '13:00', '14:00']),
    checkout: getRandomArrayElement(['12:00', '13:00', '14:00']),
    features: generateFeatures(),
    description: getRandomArrayElement([
      'This beautiful house offers breathtaking views of the surrounding nature.',
      'All this in the peaceful surroundings of our beautiful gardens, will make unforgettable holiday.',
      'Welcome to relax and unwind in a quiet and elegant setting.',
      'Holiday with wonderful surroundings of nature and at the same time luxury and coziness.',
      'Welcomes you in a real cosmopolitan, pulsing milieu, at the same time offering peace and intimate retirement, just in the heart of the city centre.'
    ]),
    photos:getRandomArrayElement( [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ]),
  };
}

const SIMILAR_HOTEL_COUNT = 10;
const similarHotels = new Array(SIMILAR_HOTEL_COUNT).fill(null).map(() => createOffer());
