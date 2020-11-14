import axios from "axios";

const state = {
  formesJuridiques: [],
};
const getters = {
  allFormesJuridiques: state => state.formesJuridiques,

};
const actions = {
  // Get All:
  async getFormesJuridiques({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeFormesJuridiques");
    // response
    commit("setFormesJuridiques", response.data);
  },

};

const mutations = {
  setFormesJuridiques: (state, formesJuridiques) => (state.formesJuridiques = formesJuridiques),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

