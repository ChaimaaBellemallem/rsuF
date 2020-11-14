import axios from "axios";

const state = {
  activites: [],
  filieres: [],
  secteurs: [],
  activityChoice:[],
};
const getters = {
  allActivites: (state) => state.activites,
  allFilieres: (state) => state.filieres,
  allSecteurs: (state) => state.secteurs,
  allActivitiesChoice: (state) => state.activityChoice,
};
const actions = {
  // Get All:
  async getActivites({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
    );
    // response
    commit("setActivites", response.data);
  },
  async getActivitesChoice({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
    );
    // response
    commit("setActivitesChoice", response.data);
  },
  async getFilieres({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
    );
    // response
    commit("setFilieres", response.data);
  },
  async getSecteurs({ commit }) {
    // request
    const response = await axios.get(
      "http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs"
    );
    // response
    commit("setSecteurs", response.data);
  },

  addActivity({ commit }, formData) {
    // request
    console.log("ajouter une activité");
    axios
      .post(
        "http://localhost:8000/rsu/StdTables/addActivity",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        formData
      )
      .then((response) => {
        // trés important de vérifier la réponse du requette avant d efaire quoi que ce soit
        if (response.status === 200) {
          // si les inforamtion sont a jouté avec succés
          commit("postVilles", response.data);
        } else if (response.status === 500) {
          // si il y a une erreur au serveur
          commit(
            "handleError",
            "un probléme au serveurs réssayer ultérieurement"
          );
        } else if (response.status === 404) {
          commit(
            "handleError",
            "nous n'avons pas pus trouvés cette déstination"
          );
        }
      });
  },
};

const mutations = {
  setActivites: (state, activites) => (state.activites = activites),
  setFilieres: (state, filieres) => (state.filieres = filieres),
  setSecteurs: (state, secteurs) => (state.secteurs = secteurs),
  setActivitesChoice: (state, activityChoice) => (state.activityChoice = activityChoice),
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

