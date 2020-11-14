<template>
  <div class="show-personne-physique">
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Sociétaire_Morale">
            <i class="fa fa-user" aria-hidden="true"></i>
            Personne Morale</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Fiche Signalétique
        </li>
      </ol>
    </nav>

    <!-- button -->
    <div class="table-show">
      <div class="header-butn">
        <router-link to="" class="btn btn-primary" role="button"
          >Portefeuille Sociétaire</router-link
        >
        <router-link to="" class="btn btn-dark" role="button">
          <!-- <i class="fa fa-calculator" aria-hidden="true"></i> -->
          Comptabilité Sociétaire</router-link
        >
        <router-link to="" class="btn btn-warning" role="button">
          <!-- <i class="fa fa-check" aria-hidden="true"></i> -->
          Effectuer Devis Auto</router-link
        >
        <router-link to="" class="btn btn-danger" role="button">
          <!-- <i class="fa fa-check" aria-hidden="true"></i> -->
          Effectuer Devis RD</router-link
        >
        <div class="dropdown open">
          <button
            class="btn btn-success dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Modifier fiche signalitique
          </button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" href="#">Action</button>
            <button class="dropdown-item" href="#">action</button>
            <button class="dropdown-item" href="#">action</button>
            <button class="dropdown-item" href="#">action</button>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="container">
        <div class="row">
          <div class="panel col-md-6">
            <table class="table table-light">
              <thead>
                <tr>
                  <th class="title" scope="col" colspan="6">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    Informations Sociétaire
                  </th>
                </tr>
              </thead>
              <tbody class="tbody-color">
                <tr>
                  <th colspan="3">Nom :</th>
                  <th colspan="3">Prénom :jncjqnqlnp</th>
                </tr>
                <tr>
                  <th colspan="3">Qualité : n kqs jkq</th>
                  <th colspan="3">Sexe : n cjqjnj</th>
                </tr>
                <tr>
                  <th colspan="3">CIN : jncknoodc</th>
                  <th colspan="3">Profession :jnocnsq</th>
                </tr>
                <tr>
                  <th colspan="3">Date de naissance :</th>
                  <th colspan="3">Pays de naissance :</th>
                </tr>
                <tr>
                  <th colspan="6">VIP :</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="panel col-md-6">
            <table class="table table-light">
              <thead>
                <tr>
                  <th class="title" scope="col" colspan="4">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Correspondances
                  </th>
                </tr>
              </thead>
              <tbody class="tbody-color">
                <tr>
                  <th colspan="4">Adresse comp. :</th>
                </tr>
                <tr>
                  <th colspan="2">Numéro :</th>
                  <th colspan="2">Voie :</th>
                </tr>
                <tr>
                  <th colspan="2">Ville :</th>
                  <th colspan="2">Code_postal :</th>
                </tr>
                <tr>
                  <th colspan="2">Pays :</th>
                  <th colspan="2">E-Mail :</th>
                </tr>
                <tr>
                  <th colspan="2">Tél.portable :</th>
                  <th colspan="2">Tél.fixe :</th>
                </tr>
              </tbody>
            </table>
          </div>
          <table class="table table-light">
            <thead>
              <tr>
                <th class="title" scope="col" colspan="4">
                  <i class="fa fa-bar-chart" aria-hidden="true"></i>
                  Informations Activité
                </th>
              </tr>
            </thead>
            <tbody class="tbody-color">
              <tr>
                <th colspan="2">Catégorie VIP :</th>
                <th colspan="2">Profession :</th>
              </tr>
              <tr>
                <th colspan="4">Organisme d’appartenance :</th>
              </tr>
              <tr>
                <th colspan="2">Référence d’appartenance :</th>
                <th colspan="2">Tribunal d'immatriculation :</th>
              </tr>
              <tr>
                <th colspan="4">Numéro registre du commerce :</th>
              </tr>
            </tbody>
          </table>
          <table class="table table-light">
            <thead>
              <tr>
                <th class="title" scope="col" colspan="4">
                  <i class="fa fa-id-card-o" aria-hidden="true"></i>
                  Piéce d'identité
                </th>
              </tr>
            </thead>
            <tbody class="tbody-color">
              <tr>
                <th colspan="4">Type de document :</th>
              </tr>
              <tr>
                <th colspan="2">Num. référence :</th>
                <th colspan="2">Date de délivrance :</th>
              </tr>
              <tr>
                <th colspan="2">Lieu de délivrance :</th>
                <th colspan="2">Date d’expiration :</th>
              </tr>
            </tbody>
          </table>
        </div>
        <table class="table table-light">
          <thead>
            <tr>
              <th class="title" scope="col" colspan="4">
                <i class="fa fa-university" aria-hidden="true"></i>
                Banques
              </th>
            </tr>
          </thead>
          <tbody class="tbody-color">
            <tr>
              <th colspan="2">Nom de la banque :</th>
              <th colspan="2">Code Banques :</th>
            </tr>
            <tr>
              <th colspan="2">Code Banques :</th>
              <th colspan="2">Code ville :</th>
            </tr>
            <tr>
              <th colspan="2">Numéro de compte :</th>
              <th colspan="2">Clé de RIB :</th>
            </tr>
            <tr>
              <th colspan="2">RIB :</th>
              <th colspan="2">Code Swift :</th>
            </tr>
          </tbody>
        </table>
        <table class="table table-light">
          <thead>
            <tr>
              <th class="title" scope="col" colspan="4">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                Activité Professionnelle
              </th>
            </tr>
          </thead>
          <tbody class="tbody-color">
            <tr>
              <th>Secteur d'activité :</th>
              <th>Filière :</th>
              <th>Activité :</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShowTableMorale",
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["getOnePersonnePhysique"])
  },
  computed: {

    // mimi() {
    //   return this.$store.state.personnePhysique.find(
    //     vid => vid.id == this.$route.params.id
    //   );
    // }
    
    ...mapGetters(["findOnePersonnePhysique"])
  },

  // Load Page:
  created() {
    this.getOnePersonnePhysique();
  }
};
</script>

<style scoped>
</style>
