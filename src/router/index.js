import Vue from "vue";
import VueRouter from "vue-router";
// Home:
import Home from "../views/Home.vue";
// Societaire Physique:
import SocietairePhysique from "../views/SocietairePhysique.vue";
import PostPhysique from "../components/physique/PostPhysique";
import ShowPhysique from "../components/physique/ShowPhysique";
import UpdatePhysique from "../components/physique/UpdatePhysique";
// Societaire Morale:
import SocietaireMorale from "../views/SocietaireMorale.vue";
import PostMorale from "../components/morale/PostMorale";
import ShowMorale from "../components/morale/ShowMorale";
import UpdateMorale from "../components/morale/UpdateMorale";

// tables Nomenclatures:
import Nomenclatures from "../views/Nomenclatures.vue";
import Villes from "../components/Tables_Nomenclatures/Villes.vue";
import Activites_Professionnelle from "../components/Tables_Nomenclatures/Activites_Professionnelle.vue";
import Pays from "../components/Tables_Nomenclatures/Pays.vue";
import Secteurs from "../components/Tables_Nomenclatures/Secteurs.vue";
import Filieres from "../components/Tables_Nomenclatures/Filieres.vue";
import Communes from "../components/Tables_Nomenclatures/Communes.vue";
import Qualites from "../components/Tables_Nomenclatures/Qualites.vue";
import Voies from "../components/Tables_Nomenclatures/Voies.vue";
import Organismes_Affiliation from "../components/Tables_Nomenclatures/Organismes_Affiliation.vue";
import Categories_Vip from "../components/Tables_Nomenclatures/Categories_Vip";
import Professions from "../components/Tables_Nomenclatures/Professions";
import Type_Document from "../components/Tables_Nomenclatures/Type_Document";
import Formes_Juridiques from "../components/Tables_Nomenclatures/Formes_Juridiques";
import Provinces from "../components/Tables_Nomenclatures/Provinces";

import PieceIdentite from "../views/PieceIdentite.vue";
// import Activites from "../views/Activites.vue";
import Contacts from "../views/Contacts.vue";


import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // Personne Physique
  {
    path: "/Sociétaire_Physique",
    name: "societaire_physique",
    component: SocietairePhysique,
    children: [
      // {
      //   path: "",
      //   name: "ListPersonnePhysique",
      //   component: ListPersonnePhysique,
      // },
      // {
      //   path: ":id",
      //   name: "Recherche",
      //   component: Recherche,
      //   props:true
      // },
      // {
      //   path: "/Fiche_Signalétique/:id",
      //   name: "Fiche_Signalétique_Physique",
      //   component: ShowPhysique,
      //   params:true
      // },
    ]
  },
  {
    path: "/Sociétaire_Physique/Fiche_Signalétique/:id",
    name: "Fiche_Signalétique_Physique",
    component: ShowPhysique,
    params:true
  },
  {
    path: "/Sociétaire_Physique/Ajouter",
    name: "Ajouter_Societaire_Physique",
    component: PostPhysique,
  },
  {
    path: "/Sociétaire_Physique/Modifier",
    name: "Modifier_Societaire_Physique",
    component: UpdatePhysique,
  },

  //Personne Morale:
  {
    path: "/Sociétaire_Morale",
    name: "societaire_morale",
    component: SocietaireMorale
  },
  {
    path: "/Sociétaire_Morale/Fiche_Signalétique/:id",
    name: "Fiche_Signalétique_Morale",
    component: ShowMorale,
    params:true
  },
  {
    path: "/Sociétaire_Morale/Ajouter",
    name: "Ajouter_Societaire_Morale",
    component: PostMorale,
  },
  {
    path: "/Sociétaire_Morale/Modifier",
    name: "Modifier_Societaire_Morale",
    component: UpdateMorale,
  },

  // Tables Nomenclatures:
  {
    path: "/Table_Nomenclatures",
    name: "nomenclatures",
    component: Nomenclatures
  },
  {
    path: "/Table_Nomenclatures/Villes",
    name: "Villes",
    component: Villes
  },
  {
    path: "/Table_Nomenclatures/Pays",
    name: "Pays",
    component: Pays
  },
  {
    path: "/Table_Nomenclatures/Activités_Professionnelle",
    name: "Activites_Professionnelle",
    component: Activites_Professionnelle
  },
  {
    path: "/Table_Nomenclatures/Secteurs",
    name: "Secteurs",
    component: Secteurs
  },
  {
    path: "/Table_Nomenclatures/Filières",
    name: "Filieres",
    component: Filieres
  },
  {
    path: "/Table_Nomenclatures/Communes",
    name: "Communes",
    component: Communes
  },
  {
    path: "/Table_Nomenclatures/Qualités",
    name: "Qualites",
    component: Qualites
  },
  {
    path: "/Table_Nomenclatures/Voies",
    name: "Voies",
    component: Voies
  },
  {
    path: "/Table_Nomenclatures/Organismes_Affiliation",
    name: "Organismes_Affiliation",
    component: Organismes_Affiliation
  },
  {
    path: "/Table_Nomenclatures/Categories_Vip",
    name: "Categories_Vip",
    component: Categories_Vip
  },
  {
    path: "/Table_Nomenclatures/Professions",
    name: "Professions",
    component: Professions
  },
  {
    path: "/Table_Nomenclatures/Type_Document",
    name: "Type_Document",
    component: Type_Document
  },
  {
    path: "/Table_Nomenclatures/Formes_Juridiques",
    name: "Formes_Juridiques",
    component: Formes_Juridiques
  },
  {
    path: "/Table_Nomenclatures/Provinces",
    name: "Provinces",
    component: Provinces
  },


  {
    path: "/piece_identite",
    name: "piece_identite",
    component: PieceIdentite
  },
  // {
  //   path: "/activites",
  //   name: "activites",
  //   component: Activites
  // },
 
  {
    path: "/contact",
    name: "contact",
    component: Contacts
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  },

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
