import { uploadPhoto, createUser } from './utils';

/**
 * Calls the uploadPhoto and createUser functions asynchronously
 * and returns an object with the responses from both functions.
 *
 * @returns {Promise<Object>} An object with 'photo' and 'user' properties.
 *                           Each property holds the response from the respective function.
 *                           If any function fails, returns an empty object.
 */
async function asyncUploadUser() {
  try {
    // Use Promise.all to execute both functions concurrently
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return an object with the responses from both functions
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
