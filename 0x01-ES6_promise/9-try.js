/**
 * Creates an array named queue to capture the result or error
 * of executing the provided mathFunction.
 *
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} The array containing the result or error messages.
 */
export default function guardrail(mathFunction) {
  // Initialize an array to capture the result or error messages
  const queue = [];

  try {
    // Execute the provided mathFunction and append the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message);
  } finally {
    // Add the message "Guardrail was processed" to the queue in every case
    queue.push('Guardrail was processed');
  }

  // Return the array containing the result or error messages
  return queue;
}
