<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa fa-user" aria-hidden="true"></i> Personne Morale
        </li>
      </ol>
    </nav>
  <ListPersonneMorale></ListPersonneMorale>
  </div>
</template>

<script>
import ListPersonneMorale from "../components/morale/ListPersonneMorale";
export default {
  name: "SocietaireMorale",
  components: {
    ListPersonneMorale,
  }
};
</script>
<style  scoped>

</style>