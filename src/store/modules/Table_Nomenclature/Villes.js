import axios from "axios";

const state = {
  villes: [],
  errors: [],
};
const getters = {
  allVilles: state => state.villes,
  allErrors: state => state.errors,

};
const actions = {
  // Get All:
  async getVilles({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listevilles");
    // response
    
    commit("setVilles", response.data);
    
    // 
  },

  //Add One:
  addVilles({ commit }, formData) {
    // request
    console.log("ajouter une ville");
    axios.post(
      "http://localhost:8000/rsu/StdTables/addVille",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      formData
    ).then(response => {
      // trés important de vérifier la réponse du requette avant d efaire quoi que ce soit
      if(response.status === 200){
        // si les inforamtion sont a jouté avec succés
        commit("postVilles", response.data);
      }
      else if (response.status === 500) {
        // si il y a une erreur au serveur
        commit("handleError", "un probléme au serveurs réssayer ultérieurement");
      }else if (response.status === 404) {
        commit("handleError", "nous n'avons pas pus trouvés cette déstination");
      }
    });
  },
};

const mutations = {
  setVilles: (state, villes) => (state.villes = villes),
  // postVilles:(state, ville) => state.villes.unshift(ville),
  postVilles(state, ville){
    // let villes =state.villes.concat(ville);
    let villes = [...state.villes, ville];
    console.log(villes);
    state.villes=villes;
  },
  handleError(state, error){
    let errors = [...state.errors, {message: error}];
    state.errors = errors;
  }
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

