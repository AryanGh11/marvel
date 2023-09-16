export default function createOneTimeCode() {
  const min = 100000;
  const max = 999999;

  //Random number between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
