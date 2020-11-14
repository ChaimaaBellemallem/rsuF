<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-user" aria-hidden="true"></i>
          Personne Physique
        </li>
      </ol>
    </nav>
    <!-- <ul>
      <li>
        <router-link to="/Societaire_Physique/recherche">Recherche</router-link>
      </li>
    </ul> -->
    <ListPersonnePhysique></ListPersonnePhysique>
  </div>
</template>

<script>
import ListPersonnePhysique from "../components/physique/ListPersonnePhysique";

export default {
  name: "SocietairePhysique",
  components: {
    ListPersonnePhysique
  }
};
</script>