/**
 * Generates a reverse Fibonacci sequence.
 *
 * @param {number} init1 - The first number in the sequence.
 * @param {number} init2 - The second number in the sequence.
 * @param {number} count - The number of elements in the sequence.
 * @return {number[]} The reverse Fibonacci sequence.
 */
export function reverseFibonacci(
  init1: number,
  init2: number,
  count: number
): number[] {
  let sequence = [init1, init2];

  if (init1 + init2 == 0) {
    return sequence;
  }

  for (let i = 2; i < count + 2; i++) {
    let next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}
