<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg bg-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/logo.png" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline">
          <input
            class="form-control mr-sm-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-search" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <ul class="navbar-nav">
          <li>
            <img
              class="img-admin"
              src="../../assets/images/woman.jpg"
              alt="admin"
            />
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SARA Doe
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <i class="fa fa-cog" aria-hidden="true"></i>
                Réglages</a
              >
              <a class="dropdown-item" href="#">
                <i class="fa fa-lock" aria-hidden="true"></i> Lock screen</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item logout" href="#">
                <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style lang="scss" scoped>
</style>