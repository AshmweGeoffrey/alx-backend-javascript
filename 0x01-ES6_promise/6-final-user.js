import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the sign-up process and photo upload.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the photo file to be processed.
 * @returns {Promise} A promise that resolves to an array containing
 *                    the results of the sign-up and photo upload promises.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })))
    .catch((error) => {
      // Handle any unexpected errors
      console.error('Error:', error.message);
      return [];
    });
}
