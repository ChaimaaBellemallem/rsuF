import axios from "axios";

const state = {
  pays: [],
};
const getters = {
  allPays: state => state.pays,

};
const actions = {
  // Get All:
  async getPays({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listePays");
    // response
    commit("setPays", response.data);
  },

};

const mutations = {
  setPays: (state, pays) => (state.pays = pays),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

