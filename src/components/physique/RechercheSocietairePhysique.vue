<template>
  <div>
    <form class="form-recherche">
      <fieldset class="fieldset-recherche">
        <legend>
          <i class="fa fa-search" aria-hidden="true"></i> Recherche
        </legend>

        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="inputRefApp">La référence d’appartenance</label>
            <input type="string" class="form-control" id="RefApp" />
          </div>
          <div class="form-group col-md-7">
            <label for="inputAddress">Nom sociétaire</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Nom & Prénom"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputCin">CIN</label>
            <input type="text" class="form-control" id="inputCin" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputTel">Tel.Portable</label>
            <input type="tel" class="form-control" id="inputTel" />
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