import user from "./user/reducer";
import loader from "./loader/reducer";

let reducers = { user, loader };

const loadState = () => {
  try {
    const serializedData = localStorage.getItem("state");
    if (serializedData === null || serializedData === undefined) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

const configStore = { reducer: reducers, preloadedState: loadState() };

export default configStore;
