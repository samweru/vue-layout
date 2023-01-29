import { defineStore } from "pinia";

// import { fetchWrapper } from '@/helpers';
import { router } from "@/router";
import { useAlertStore } from "@/stores";
import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      try {
        // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
        // const user = fetch(`${baseUrl}/auth`, {

        //     method:'POST',
        //     data: {username,password}
        // })

        const res = await axios.get(`${baseUrl}/auth`, {
          username,
          password,
        });

        // update pinia state
        this.user = res.data;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(this.user));

        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
      // router.push("/login");
    },
  },
});
