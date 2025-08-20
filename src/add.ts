export const add = (a: number, b: number) => {
  if (a < 1) {
    return a;
  }
  if (b < 1) {
    return b;
  }
  return a + b;
}