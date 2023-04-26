import instance from "../api/instance";

const authService = {};

authService.login = function login(payload) {
  return instance
    .post("login/", payload);
};

export default authService;
