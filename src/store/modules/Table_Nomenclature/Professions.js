import axios from "axios";

const state = {
  professions: [],
};
const getters = {
  allProfessions: state => state.professions,

};
const actions = {
  // Get All:
  async getProfessions({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeProfessions");
    // response
    commit("setProfessions", response.data);
  },

};

const mutations = {
  setProfessions: (state, professions) => (state.professions = professions),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

