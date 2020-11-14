import axios from "axios";

const state = {
  categoriesVip: [],
};
const getters = {
  allCategoriesVip: state => state.categoriesVip,

};
const actions = {
  // Get All:
  async getCategoriesVip({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeCategorieVip");
    // response
    commit("setCategoriesVip", response.data);
  },

};

const mutations = {
  setCategoriesVip: (state, categoriesVip) => (state.categoriesVip = categoriesVip),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

