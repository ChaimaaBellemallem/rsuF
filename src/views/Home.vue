<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-home" aria-hidden="true"></i>
          HOME
        </li>
      </ol>
    </nav>

    <div class="test row">
      <!-- <ul>
        <li :key="kk.id_ville" v-for="kk in allPersonnePhysique">
          {{ kk.nom_ville }}
        </li>
      </ul> -->
      <div class="col-md-6">
      <h2>Ville</h2>
         <div v-for="x in Allville" :key="x.id_ville">
      <p>{{ x.nom_ville }}</p>
    </div>
    </div>

    <div class="col-md-6">
      <h2>Pays</h2>
      <div v-for="w in Allpays" :key="w.id_pays_naissance">
        <p> {{w.libelle_pays}}</p>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    // spread operator
    ...mapActions(["getVille","getPays"]),

  },
  computed: {
    ...mapGetters(["Allville","Allpays"])
  },
  created() {
    this.getVille();
    this.getPays();
  }
};
</script>