import axios from "axios";

const state = {
  qualites: [],
};
const getters = {
  allQualites: state => state.qualites,

};
const actions = {
  // Get All:
  async getQualites({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeQualites");
    // response
    commit("setQualites", response.data);
  },

};

const mutations = {
  setQualites: (state, qualites) => (state.qualites = qualites),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

