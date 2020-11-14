import axios from "axios";

const state = {
  secteurs: [],
};
const getters = {
  allSecteur: state => state.secteurs,

};
const actions = {
  // Get All:
  async getSecteur({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeSecteurs");
    // response
    commit("setSecteur", response.data);
  },

};

const mutations = {
  setSecteur: (state, secteurs) => (state.secteurs = secteurs),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

