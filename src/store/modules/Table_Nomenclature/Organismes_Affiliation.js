import axios from "axios";

const state = {
  organismesAffiliation: [],
};
const getters = {
  allOrganismesAffiliation: state => state.organismesAffiliation,

};
const actions = {
  // Get All:
  async getOrganismesAffiliation({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeOrganismesAffiliation");
    // response
    commit("setOrganismesAffiliation", response.data);
  },

};

const mutations = {
  setOrganismesAffiliation: (state, organismesAffiliation) => (state.organismesAffiliation = organismesAffiliation),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

