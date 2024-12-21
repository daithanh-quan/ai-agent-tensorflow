import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

const keys = {
  token: "token",
};

class Cookie {
  setToken(token: string) {
    setCookie(keys.token, token);
  }

  getToken() {
    return getCookie(keys.token);
  }

  deleteToken() {
    deleteCookie(keys.token);
  }
}

const cookie = new Cookie();

export default cookie;
