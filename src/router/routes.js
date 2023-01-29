// import { Layout, Login, Register } from '@/views';
import { Layout, Login } from "@/views";

export default {
  path: "/account",
  component: Layout,
  children: [
    { path: "", redirect: "login" },
    { path: "login", component: Login },
    // { path: 'register', component: Register }
  ],
};
