import instance from "../api/instance";

const authService = {};

authService.login = function login(payload) {
  return instance.post("login/", payload);
};

authService.logout = function logout(payload) {
  return instance.post("logout/", payload);
};

export default authService;
