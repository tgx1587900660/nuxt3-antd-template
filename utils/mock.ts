function getRandomColor() {
  return `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`;
}
const color = getRandomColor();
console.log('color :>> ', color);
