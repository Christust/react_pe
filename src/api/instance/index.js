import axios from "axios";
import swal from "sweetalert";
import store from "../../store";
import { setLoaderCount } from "../../store/reducers/loader/actions";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  console.log(config);
  store.dispatch(setLoaderCount(1));
  return config;
});

instance.interceptors.response.use(
  (res) => {
    store.dispatch(setLoaderCount(-1));
    return res;
  },
  (error) => {
    store.dispatch(setLoaderCount(-1));
    swal("Error!", error.response.data.message, "error");
    return error;
  }
);

export default instance;
