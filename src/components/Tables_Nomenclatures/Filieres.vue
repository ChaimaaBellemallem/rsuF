<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Table_Nomenclatures">
            <img src="https://img.icons8.com/nolan/64/remittance-slip.png" />
            Tables Nomenclatures
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Filières</li>
      </ol>
    </nav>

    <div class="table-crud">
      <!-- table select -->
      <div class="row search-select">
        <div class="input-group data-table col-2">
          <select class="custom-select">
            <option value="1" selected>10</option>
            <option value="2">25</option>
            <option value="3">50</option>
            <option value="3">100</option>
          </select>
        </div>
        <!-- Search form -->
        <form class="search form-inline col-md-3">
          <input
            class="form-control w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </form>
      </div>
      <!-- button ajouter -->
      <div class="form-row form-ajouter">
        <div class="form-group col-md-4">
          <label for="">Filière</label>
          <input type="string" class="form-control" />
        </div>
        <div class="form-group col-md-4">
          <label for="">Secteur</label>
          <select class="form-control form-control">
            <option>Sélectionnez Secteur</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div class="button-recherche col-md-3">
          <button type="submit" class="btn btn-light">
            Ajouter
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <!-- Table crud -->
      <div class="table-crud-body row">
        <table class="table table-hover col-md-6 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Filières</th>
              <th scope="col">Secteurs</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="crud-body">
            <tr :key="filiere.id_filiere" v-for="filiere in allFilieres">
              <th scope="row" class="id-client">
                {{ filiere.id_filiere }}
              </th>
              <td>{{ filiere.filiere }}</td>
              <td>{{ filiere.id_secteur }}</td>
              <td class="actions-btn">
                <!-- <router-link
                  :to="{
                    name: 'ville',
                    params: { id: ville.id_ville }
                  }"
                  class="show-btn"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </router-link> -->
                <router-link to="#" class="edit-btn">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </router-link>
                <router-link to="#" class="delete-btn">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../Layout/Pagination";
export default {
  name: "Filieres",
  components: {
    Pagination
  },
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["getFilieres"])
  },
  computed: {
    ...mapGetters(["allFilieres"])
  },

  //   Load Page:
  created() {
    this.getFilieres();
  }
};
</script>
<style scoped>
</style>
