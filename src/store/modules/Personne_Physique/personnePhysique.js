import axios from "axios";

const state = {
  personnePhysique: [],
  pays: [],
  // findPersonnePhysique:[]
};
const getters = {
  allPersonnePhysique: (state) => state.personnePhysique,
  allPays: (state) => state.pays,
  findOnePersonnePhysique: (state) =>
    state.personnePhysique.find((vid) => vid.id == this.$route.params.id),
};
const actions = {
  // Get All:
  async fetchPersonnePhysique({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/ClientPhysique/getlisteClientsPhysique"
    );
    // response
    // console.log(response.data);
    commit("setPersonnePhysique", response.data);
  },

  // Add One:
  async CreatePersonnePhysique({ commit }, data) {
    const response = await axios.post(
      "http://localhost:8000/rsu/ClientPhysique/addClientPhysique",
      data
    );
    commit("NewPersonnePhysique", response.data);
  },

  // Get One:
  async getOnePersonnePhysique({ commit }, id) {
    const response = await axios.get(
      `http://localhost:8000/rsu/ClientPhysique/selectClientPhysiqueByIdClientPhysique/id_client_physique/${id}`
    );
    commit("setOnePersonnePhysique", response.data);
  },
  // Get All countrie:
  async getPays({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listePays"
    );
    // response
    commit("setPays", response.data);
  },

  // Delete One :
  async deleteOnePersonnePhysique({ commit }, id) {
    const response = await axios.delete(
      `http://localhost:8000/rsu/ClientPhysique/selectClientPhysiqueByIdClientPhysique/id_client_physique/${id}`
    );
    commit("removeOnePersonnePhysique", response.data);
  },
};

const mutations = {
  setPays: (state, pays) => (state.pays = pays),

  setPersonnePhysique: (state, personnePhysique) =>
    (state.personnePhysique = personnePhysique),
  NewPersonnePhysique: (state, physique) =>
    state.personnePhysique.unshift(physique),
  removeOnePersonnePhysique: (state, id) =>
    (state.personnePhysique = state.PersonnePhysique.filter(
      (getAll) => getAll.id !== id
    )),
  setOnePersonnePhysique: (state, personnePhysique) =>
    (state.personnePhysique = personnePhysique),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations,
};
