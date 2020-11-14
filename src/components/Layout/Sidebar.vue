<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Référentiel Sociétaire Unique</h3>
      </div>

      <ul class="nav nav-pills list-unstyled">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact>
            <i class="fa fa-home" aria-hidden="true"></i>
            HOME
          </router-link>
        </li>

        <!-- <li class="nav-item">
          <router-link to="/recherche" class="nav-link" active-class="active">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span>Rechercher un sociétaire</span>
          </router-link>
        </li> -->
        <li class="nav-item">
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="nav-link"
            active-class="active"
            exact
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <span> Gestion des sociétaires</span>
          </a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li class="nav-item">
              <router-link
                to="/Sociétaire_Physique"
                class="nav-link"
                active-class="active"
                >Personne Physique</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Sociétaire_Morale"
                class="nav-link"
                active-class="active"
                >Personne morale</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link
            to="/piece_identite"
            class="nav-link"
            active-class="active"
          >
            <i class="fa fa-address-card" aria-hidden="true"></i>
            <span>Gérer les pièces d'identité d'un sociétaire</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/activites" class="nav-link" active-class="active">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Gérer les activités des sociétaire
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/Table_Nomenclatures"
            class="nav-link"
            active-class="active"
          >
            <i class="fa fa-table" aria-hidden="true"></i>
            Gérer les tables nomenclatures
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            les contacts de l'entreprise
          </router-link>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li>
          <a href="#" class="btn-logout">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <span class="log-out">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
#sidebar ul li.active a,
a[aria-expanded="true"] {
  color: rgb(5, 5, 5);
  background: #fafafa;
}

#sidebar ul li.active a,
a[data-toggle="collapse"] {
  position: relative;
}

#sidebar ul li.active a,
a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
  content: "\f078";
  font-family: "FontAwesome";
  display: block;
  position: absolute;
  right: 11px;
  top: 12px;
  font-size: 0.8em;
}

#sidebar ul li.active a,
a[aria-expanded="true"]::before {
  content: "\f077";
}
</style>
