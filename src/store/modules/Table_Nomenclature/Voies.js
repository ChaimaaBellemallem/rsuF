import axios from "axios";

const state = {
  Voies: [],
};
const getters = {
  allVoies: state => state.Voies,

};
const actions = {
  // Get All:
  async getVoies({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeVoies");
    // response
    commit("setVoies", response.data);
  },

};

const mutations = {
  setVoies: (state, Voies) => (state.Voies = Voies),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

