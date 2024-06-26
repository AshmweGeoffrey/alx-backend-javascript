/**
 * Divides two numbers.
 *
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the denominator is equal to 0.
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0 to avoid division by zero
  if (denominator === 0) {
    throw Error('Cannot divide by 0');
  }

  // Return the result of the division
  return numerator / denominator;
}
