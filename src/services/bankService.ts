import { API_URL } from "./config";

export default {
  getBanks() {
    return API_URL.get("/banks");
  },
};
