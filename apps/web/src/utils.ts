export function incrementSequence(arr: number[], maxValue: number) {
  return arr.map(num => (num + 1 > maxValue ? 0 : num + 1));
}