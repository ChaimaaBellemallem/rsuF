<template>
  <div class="table-crud">
    <!-- <router-view></router-view> -->

    <RechercheSocietaireMorale></RechercheSocietaireMorale>
    <div class="table-crud-header">
      <div class="crud-button">
        <router-link
          to="/Sociétaire_Morale/Ajouter"
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
            <th scope="col">Raison sociale</th>
            <th scope="col">N° Patente</th>
            <th scope="col">N° RC</th>
            <th scope="col">ICE</th>
            <th scope="col">Tel.Fix</th>
            <th scope="col">FAX</th>
            <th scope="col">VIP</th>
            <th scope="col">UUid_client</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="crud-body">
          <tr
            :key="morale.id_client_physique"
            v-for="morale in allPersonneMorale"
          >
            <th scope="row" class="id-client">
              {{ morale.id_client_physique }}
            </th>
            <td>{{ morale.raison_sociale }}</td>
            <td>{{ morale.numero_patente }}</td>
            <td>{{ morale.numero_rc }}</td>
            <td>{{ morale.ice }}</td>
            <td>{{ morale.tel_fixe }}</td>
            <td>{{ morale.fax }}</td>
            <td>{{ morale.is_vip }}</td>
            <td>{{ morale.uuid_client }}</td>
            <td class="actions-btn">
              <router-link
                :to="{
                  name: 'Fiche_Signalétique_Morale',
                  params: { id: morale.id_client_morale }
                }"
                class="show-btn"
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </router-link>
              <router-link
                to="/Societaire_Morale/Modifier_Personne"
                class="edit-btn"
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </router-link>
              <!-- <router-link
              to="#"
                @click="deleteOnePersonneMorale(morale.id_client_morale)"
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
import RechercheSocietaireMorale from "../morale/RechercheSocietaireMorale";
import Pagination from "../Layout/Pagination";
export default {
  name: "ListPersonneMorale",
  components: {
    RechercheSocietaireMorale,
    Pagination
  },
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["fetchPersonneMorale"])
  },
  computed: {
    ...mapGetters(["allPersonneMorale"])
  },

  // Load Page:
  created() {
    this.fetchPersonneMorale();
  }
};
</script>
<style scoped>
</style>
