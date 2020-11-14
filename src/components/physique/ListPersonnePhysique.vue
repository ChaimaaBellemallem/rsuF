<template>
  <div class="table-crud">
    <!-- <router-view></router-view> -->

    <RechercheSocietairePhysique></RechercheSocietairePhysique>
    <div class="table-crud-header">
      <div class="crud-button">
        <router-link
          to="/Sociétaire_Physique/Ajouter"
          class="btn-ajouter"
          role="button"
        >
          Ajouter
          <i class="fa fa-plus" aria-hidden="true"></i>
        </router-link>
        <div class="input-group data-table ">
          <!-- <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Shows:</label>
  </div> -->
          <select class="custom-select" id="inputGroupSelect01">
            <option value="1" selected>10</option>
            <option value="2">25</option>
            <option value="3">50</option>
            <option value="3">100</option>
          </select>
        </div>
      </div>
      <!-- Search form -->
      <form class="search form-inline">
        <input
          class="form-control w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <i class="fa fa-search" aria-hidden="true"></i>
      </form>
    </div>
    <!-- Table -->
    <div class="table-crud-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Sexe</th>
            <th scope="col">CIN</th>
            <th scope="col">Tel-Portable</th>
            <th scope="col">VIP</th>
            <th scope="col">UUid_client</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="crud-body">
          <tr
            :key="physique.id_client_physique"
            v-for="physique in allPersonnePhysique"
          >
            <th scope="row" class="id-client">
              {{ physique.id_client_physique }}
            </th>
            <td>{{ physique.nom_client }}</td>
            <td>{{ physique.prenom_client }}</td>
            <td>{{ physique.sexe_client }}</td>
            <td>{{ physique.reference_document }}</td>
            <td>{{ physique.telephone_mobile }}</td>
            <td>{{ physique.is_vip }}</td>
            <td>{{ physique.uuid_client }}</td>
            <td class="actions-btn">
              <router-link
                :to="{
                  name: 'Fiche_Signalétique_Physique',
                  params: { id: physique.id_client_physique }
                }"
                class="show-btn"
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </router-link>
              <router-link
                to="/Sociétaire_Physique/Modifier"
                class="edit-btn"
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </router-link>
              <!-- <router-link
                to="#"
                @click="deleteOnePersonnePhysique(physique.id_client_physique)"
                class="delete-btn"
              >
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination></Pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RechercheSocietairePhysique from "../physique/RechercheSocietairePhysique";
import Pagination from "../Layout/Pagination";
export default {
  name: "ListPersonnePhysique",
  components: {
    RechercheSocietairePhysique,
    Pagination
  },
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["fetchPersonnePhysique", "deleteOnePersonnePhysique"])
  },
  computed: {
    ...mapGetters(["allPersonnePhysique"])
  },

  // Load Page:
  created() {
    this.fetchPersonnePhysique();
  }
};
</script>
<style scoped>
</style>
