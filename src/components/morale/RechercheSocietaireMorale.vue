<template>
  <div>
    <form class="form-recherche">
      <fieldset class="fieldset-recherche">
        <legend>
          <i class="fa fa-search" aria-hidden="true"></i> Recherche
        </legend>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="inputIce">ICE</label>
            <input type="text" class="form-control" id="inputIce" />
          </div>
          <div class="button-recherche col-md-6">
            <button type="submit" class="btn btn-default">
              Recherche
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button type="reset" class="btn btn-dark">
              Reinitialiser
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<style scoped>

</style>