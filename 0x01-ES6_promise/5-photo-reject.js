/**
 * Uploads a photo with the specified file name.
 *
 * @param {string} fileName - The name of the photo file to be processed.
 * @returns {Promise} A promise that rejects with an error containing
 *                   the message indicating that the file cannot be processed.
 */
function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Immediately reject the promise with an error
    reject(new Error(`${fileName} cannot be processed`));
  });
}

export default uploadPhoto;
