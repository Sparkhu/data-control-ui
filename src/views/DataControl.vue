<template>
  <div class="wrapper">
    <div class="table-header">데이터관리</div>
    <div class="table-main">
      <div class="table-main__header">HDFS 데이터 관리</div>
      <div class="table-main__content">
        <div class="table-main__content-intro">
          HDFS 데이터의 보존 기간 및 분석 기간을 설정합니다.
        </div>
      </div>
      <div class="sub-header">데이터 폐기 기간 설정</div>
      <div class="save-setting">
        <div class="start-box">
          <div>시작일</div>
          <input type="date" v-model="currStart" />
        </div>

        <div class="period-box">
          <div>기간</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 1"
            v-bind:class="{ unclicked: currPeriod != 1 }"
          >
            1년
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 2"
            v-bind:class="{ unclicked: currPeriod != 2 }"
          >
            2년
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 3"
            v-bind:class="{ unclicked: currPeriod != 3 }"
          >
            3년
          </button>
        </div>
        <div class="condition-box">
          <div>조건</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="currCondition = 0"
            v-bind:class="{ unclicked: currCondition != 0 }"
          >
            백업
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currCondition = 1"
            v-bind:class="{ unclicked: currCondition != 1 }"
          >
            폐기
          </button>
        </div>
        <div class="save-box">
          <div>저장</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="showDeleteModal = true"
          >
            저장하기
          </button>
        </div>
      </div>
      <div class="sub-header">데이터 백업 기간 설정</div>
      <div class="save-setting">
        <div class="start-box">
          <div>시작일</div>
          <input type="date" v-model="currStart" />
        </div>

        <div class="period-box">
          <div>기간</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 1"
            v-bind:class="{ unclicked: currPeriod != 1 }"
          >
            1년
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 2"
            v-bind:class="{ unclicked: currPeriod != 2 }"
          >
            2년
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currPeriod = 3"
            v-bind:class="{ unclicked: currPeriod != 3 }"
          >
            3년
          </button>
        </div>
        <div class="condition-box">
          <div>조건</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="currCondition = 0"
            v-bind:class="{ unclicked: currCondition != 0 }"
          >
            백업
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currCondition = 1"
            v-bind:class="{ unclicked: currCondition != 1 }"
          >
            폐기
          </button>
        </div>
        <div class="save-box">
          <div>저장</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="showDeleteModal = true"
          >
            저장하기
          </button>
        </div>
      </div>
      <div class="sub-header">데이터 분석 기간 설정</div>

      <div class="analysis-setting">
        <div class="period-box">
          <div>기간</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="currAnalPeriod = 1"
            v-bind:class="{
              unclicked: currAnalPeriod != 1,
            }"
          >
            Weekly
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currAnalPeriod = 2"
            v-bind:class="{
              unclicked: currAnalPeriod != 2,
            }"
          >
            Monthly
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currAnalPeriod = 3"
            v-bind:class="{
              unclicked: currAnalPeriod != 3,
            }"
          >
            Quarterly
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="currAnalPeriod = 4"
            v-bind:class="{
              unclicked: currAnalPeriod != 4,
            }"
          >
            Yearly
          </button>
        </div>
        <div class="save-box">
          <div>저장</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="showDeleteModal = true"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
    <SaveModal
      v-if="showDeleteModal"
      @close="showDeleteModal = false"
      @save="saveSafeOption"
    ></SaveModal>
  </div>
</template>

<script>
import SaveModal from "../components/SaveModal.vue";
export default {
  components: {
    SaveModal,
  },
  data() {
    return {
      showDeleteModal: false,
      currStart: null,
      currPeriod: 1,
      currCondition: 0,
      currAnalPeriod: 1,
      saveCondition: [
        { id: 0, name: "백업" },
        { id: 1, name: "폐기" },
      ],
      currSaveCondition: [{ id: 1, name: "폐기" }],
    };
  },
  methods: {
    saveSafeOption() {
      console.log(this.currStart);
      console.log(this.currPeriod);
    },
  },
};
</script>

<style>
.wrapper {
  margin: 10px;
}
.table-header {
  color: #727e8c;
  font-size: 25px;
  margin: 20px 30px;
}
.table-main__content-intro {
  color: #8a99b5b3;
  margin-left: 25px;
}
.save-setting,
.analysis-setting {
  display: flex;
  margin: 0px 50px;
  border-radius: 5px;
  padding: 20px;
  padding-top: 10px;
  background-color: rgba(188, 208, 224, 0.085);
}
.save-setting {
  margin-bottom: 30px;
}

.default-btn {
  background-color: #667693;
}
.sub-header {
  margin-top: 20px;
  margin-left: 60px;
  font-size: 17px;
  margin-bottom: 5px;
}
button {
  background-color: #4978d4 !important;
}
.start-box {
  margin: 0px 30px;
}
.start-box input {
  width: 150px;
  height: 35px;
  border: none;
  padding: 5px;
}
.period-box {
  margin: 0 15px;
}
.period-box button {
  width: 80px;
  margin-right: 10px;
  border: none;
}
.condition-box {
  margin: 0 15px;
}
.condition-box button {
  width: 80px;
  margin-right: 10px;
  border: none;
}

.save-box {
  margin-left: 200px;
}
.save-box button {
  border: none;
}

.unclicked {
  background-color: #7a859b !important;
}
.analysis-setting .period-box {
  margin-left: 30px;
}
.analysis-setting .period-box button {
  width: 118px;
}

.analysis-setting .save-box {
  margin-left: 370px;
}
</style>
