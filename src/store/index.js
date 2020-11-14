import Vue from "vue";
import Vuex from "vuex";
import personnePhysique from "./modules/Personne_Physique/personnePhysique";
import personneMorale from "./modules/Personne_Morale/personneMorale";
import Villes from "./modules/Table_Nomenclature/Villes";
import Pays from "./modules/Table_Nomenclature/Pays";
import Activites_Professionnelle from "./modules/Table_Nomenclature/Activites_Professionnelle";
import Secteurs from "./modules/Table_Nomenclature/Secteurs";
import Filieres from "./modules/Table_Nomenclature/Filieres";
import Communes from "./modules/Table_Nomenclature/Communes";
import Qualites from "./modules/Table_Nomenclature/Qualites";
import Voies from "./modules/Table_Nomenclature/Voies";
import Organismes_Affiliation from "./modules/Table_Nomenclature/Organismes_Affiliation";
import Categories_Vip from "./modules/Table_Nomenclature/Categories_Vip";
import Professions from "./modules/Table_Nomenclature/Professions";
import Type_Document from "./modules/Table_Nomenclature/Type_Document";
import Formes_Juridiques from "./modules/Table_Nomenclature/Formes_Juridiques";
import Provinces from "./modules/Table_Nomenclature/Provinces";
import Vip from "./modules/Table_Nomenclature/Vip";
import Sexe from "./modules/Table_Nomenclature/Sexe";





// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {},
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    personnePhysique,
    personneMorale,
    Villes,
    Pays,
    Activites_Professionnelle,
    Secteurs,
    Filieres,
    Communes,
    Qualites,
    Voies,
    Organismes_Affiliation,
    Categories_Vip,
    Professions,
    Type_Document,
    Formes_Juridiques,
    Provinces,
    Vip,
    Sexe
  }
});
