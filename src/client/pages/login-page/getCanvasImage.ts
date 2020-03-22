const images = [
  'kirovsk',
  'mountains',
  'clouds',
  'mountain-plane',
  'ocean',
  'snow-road',
  'sunny-mountain',
  'waves',
  'mountain-lake',
  'stars-sky',
];

const getCanvasImage = (): string => {
  const randomIndex = Math.round(Math.random() * 10) % images.length;

  return images[randomIndex];
};

export default getCanvasImage;
