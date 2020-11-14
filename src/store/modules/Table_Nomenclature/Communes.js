import axios from "axios";

const state = {
  communes: [],
};
const getters = {
  allCommunes: state => state.communes,

};
const actions = {
  // Get All:
  async getCommunes({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeCommunes");
    // response
    commit("setCommunes", response.data);
  },

};

const mutations = {
  setCommunes: (state, communes) => (state.communes = communes),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

