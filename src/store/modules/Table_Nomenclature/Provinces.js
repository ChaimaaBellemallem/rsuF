import axios from "axios";

const state = {
  provinces: [],
};
const getters = {
  allProvinces: state => state.provinces,

};
const actions = {
  // Get All:
  async getProvinces({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeProvinces");
    // response
    commit("setProvinces", response.data);
  },

};

const mutations = {
  setProvinces: (state, provinces) => (state.provinces = provinces),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

