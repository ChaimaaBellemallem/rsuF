<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="">
      <div class="row d-flex flex-nowrap">
        <div class="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div class="comp-view col-md-9">
          <router-view />
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Layout/Sidebar.vue";
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

</style>
