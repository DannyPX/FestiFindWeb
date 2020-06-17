import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import auth from "./modules/auth";
import menu from "./modules/menu";
import Search from "./modules/Search";
import festival from "./modules/festival";
import friend from "./modules/friend";
import chat from "./modules/chat";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    auth,
    menu,
    festival,
    Search,
    friend,
    chat
  }
});

export default store;
