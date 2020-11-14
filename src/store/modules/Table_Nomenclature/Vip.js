import axios from "axios";

const state = {
  Vip: [],
};
const getters = {
  allVip: state => state.Vip,

};
const actions = {
  // Get All:
  async getVip({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeVip");
    // response
    commit("setVip", response.data);
  },

};

const mutations = {
  setVip: (state, Vip) => (state.Vip = Vip),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

