/*
 * tipos de acciones
 */

export const SET_USER = "SET_USER";

/*
 * creadores de acciones
 */

export function setUser(user) {
  return { type: SET_USER, user };
}
