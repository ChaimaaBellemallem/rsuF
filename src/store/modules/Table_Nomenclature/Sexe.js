import axios from "axios";

const state = {
  Sexe: [],
};
const getters = {
  allSexe: state => state.Sexe,

};
const actions = {
  // Get All:
  async getSexe({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeSexeClient");
    // response
    commit("setSexe", response.data);
  },
};

const mutations = {
  setSexe: (state, Sexe) => (state.Sexe = Sexe),

};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

