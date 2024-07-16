export function reverseFibonacci(
  init1: number,
  init2: number,
  count: number
): number[] {
  let sequence = [init1, init2];

  for (let i = 2; i < count + 2; i++) {
    let next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}
