<template>
  <div class="modal-wrapper">
    <div class="modal-dialog" style="margin-top: 150px">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-body" style="margin-top: 10px">
            <div style="text-align: right" class="row">
              <i @click="$emit('close')" id="close-modal" class="bi bi-x"></i>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center">
              <div class="row" style="text-align: center">
                <h4 style="color: white; font-weight: bold">저장하시겠습니까?</h4>
                <i id="exclamation" class="bi bi-check-circle"></i>
              </div>

              <div class="delete-button-wrapper">
                <button
                  style="width: 90px"
                  type="button"
                  class="btn btn-danger"
                  @click="
                    $emit('save');
                    $emit('close');
                  "
                >
                  저장
                </button>
                <button
                  style="width: 90px"
                  type="button"
                  class="btn btn-secondary"
                  @click="$emit('close')"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ask-to-delete",
};
</script>
<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-header {
  background-color: #272e48;
  color: #9fb0d6;
  border-bottom: #464d5c 0.5px solid;
}
.modal-title {
  font-size: 15px;
  font-weight: bold;
}
.modal-body {
  padding: 10px 25px;
  margin-bottom: 20px;
}
.modal-content {
  background-color: #1a233a;
}
.modal-footer {
  border-top: #464d5c 0.5px solid;
}
.main-input {
  border: #464d5c 1px solid;
  border-radius: 3px;
  position: relative;
  margin-bottom: 12px;
  width: 100%;
}

.form-control {
  background-color: #1a233a;
  color: #9fb0d6;
  border: none;
  font-size: 12px;
  font-weight: bold;
  margin-left: 20px;
  width: 80%;
}
.form-control:focus {
  box-shadow: none;
  background-color: #1a233a;
  color: #9fb0d6;
}
label {
  margin-left: 3px;
  font-size: 10px;
  color: #9fb0d6;
}
.label-icon {
  margin-left: 5px;
  position: absolute;
  left: 2px;
  top: 4px;
}
select.form-control:not([size]):not([multiple]) {
  height: auto !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.delete-button-wrapper {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
#exclamation {
  color: #2fad31;
  font-size: 80px;
}
#close-modal {
  float: right;
  color: #c8d9f8;
  font-size: 30px;
}
button {
  border: none;
}
</style>
