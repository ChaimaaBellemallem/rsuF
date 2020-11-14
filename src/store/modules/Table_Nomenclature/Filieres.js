import axios from "axios";

const state = {
  filieres: [],
};
const getters = {
  allFilieres: state => state.filieres,

};
const actions = {
  // Get All:
  async getFilieres({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeFilieres");
    // response
    commit("setFilieres", response.data);
  },

};

const mutations = {
  setFilieres: (state, filieres) => (state.filieres = filieres),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

