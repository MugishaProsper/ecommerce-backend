const activeSessions = {};

/**
 * Add or update a user's active session
 * @param {string} userId - The user's ID
 * @param {string} token - The jwt token.
 */

export const addSession = (userId, token) => {
  activeSessions[userId] = token;

}

/**
 * Remove a user's active session.
 * @param {string} userId - The user's id.
 */

export const removeSession = (userId) => {
  delete activeSessions[userId];
};

/**
 * Get a user's active session token.
 * @param {string} userId - The user's ID
 * @returns {string | undefined} - The JWT token or undefined
 */

export const getSession = (userId) => {
  return activeSessions[userId];
}