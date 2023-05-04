/*
 * tipos de acciones
 */

export const SET_LOADER_COUNT = "SET_LOADER_COUNT";

/*
 * creadores de acciones
 */

export function setLoaderCount(count) {
  return { type: SET_LOADER_COUNT, count };
}
