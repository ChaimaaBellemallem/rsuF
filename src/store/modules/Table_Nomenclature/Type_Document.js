import axios from "axios";

const state = {
  typeDocument: [],
};
const getters = {
  allTypeDocument: state => state.typeDocument,

};
const actions = {
  // Get All:
  async getTypeDocument({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeTypeDocument");
    // response
    commit("setTypeDocument", response.data);
  },

};

const mutations = {
  setTypeDocument: (state, typeDocument) => (state.typeDocument = typeDocument),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

