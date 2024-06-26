/**
 * Handles the signup process by uploading a photo and creating a user.
 *
 * @returns {Promise} A promise that resolves with the concatenated information
 *                   or rejects with an error message.
 */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
