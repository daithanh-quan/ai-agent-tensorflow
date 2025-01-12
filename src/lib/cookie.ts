import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

import { decrypt, encrypt } from "src/utils/cryptoDecode";

export const keys = {
  token: "token",
  me: "me",
};

class Cookie {
  setToken(token: string) {
    setCookie(keys.token, encrypt(token), { maxAge: 60 * 60 * 24 * 30 }); // 30 ngày
  }

  getToken() {
    const token = getCookie(keys.token);
    return token ? decrypt(token as string) : null;
  }

  setMe(me: Response.User) {
    setCookie(keys.me, encrypt(JSON.stringify(me)), {
      maxAge: 60 * 60 * 24 * 30,
    }); // 30 dates
  }

  getMe() {
    const me = getCookie(keys.me);
    return me ? JSON.parse(decrypt(me as string)) : null;
  }

  signOut() {
    deleteCookie(keys.token);
    deleteCookie(keys.me);
  }
}

const cookie = new Cookie();
export default cookie;
