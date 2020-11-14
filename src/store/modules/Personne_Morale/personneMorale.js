import axios from "axios";

const state = {
  personneMorale: [],
};
const getters = {
  allPersonneMorale: state => state.personneMorale,

};
const actions = {
  // Get All:
  async fetchPersonneMorale({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/ClientMorale/selectAllClientsMorale");
    // response
    // console.log(response.data);
    commit("setPersonneMorale", response.data);
  },

};

const mutations = {
  setPersonneMorale: (state, personneMorale) => (state.personneMorale = personneMorale),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

