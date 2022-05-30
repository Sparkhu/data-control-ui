<template>
  <div class="wrapper">
    <div class="table-header">데이터관리</div>
    <div class="table-main">
      <div class="table-main__header">HDFS 데이터 관리</div>
      <div class="table-main__content">
        <div class="table-main__content-intro">
          HDFS 데이터의 보존 기간 및 분석 기간을 설정합니다.
        </div>
        <div class="save-box">
          <div class="save-label">전체 저장</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="showSaveModal = true"
            :disabled="validError"
          >
            저장하기
          </button>
          <input
            class="error"
            v-model="errorMsg"
            disabled
          />
        </div>
      </div>

      <div class="sub-header">데이터 폐기 기간 설정</div>

      <div class="save-setting">
        <div class="policy-box">
          <div>정책</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="hasDisposalPolicy = false"
            v-bind:class="{
              unclicked: hasDisposalPolicy != false,
            }"
          >
            정책없음
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="hasDisposalPolicy = true"
            v-bind:class="{
              unclicked: hasDisposalPolicy != true,
            }"
          >
            기간설정
          </button>
        </div>
        <div class="period-box">
          <div>기간</div>
          <input
            type="text"
            class="number-input"
            v-model="disposalPeriod"
            :disabled="!hasDisposalPolicy"
            minlength="1"
          />
          개월
        </div>
      </div>
      <div class="sub-header">데이터 백업 기간 설정</div>
      <div class="save-setting">
        <div class="policy-box">
          <div>정책</div>
          <button
            type="button"
            class="btn btn-primary"
            @click="hasBackupPolicy = false"
            v-bind:class="{
              unclicked: hasBackupPolicy != false,
            }"
          >
            정책없음
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="hasBackupPolicy = true"
            v-bind:class="{
              unclicked: hasBackupPolicy != true,
            }"
          >
            기간설정
          </button>
        </div>
        <div class="start-box">
          <div>시작일</div>
          <input
            type="date"
            v-model="backupStartDate"
            :disabled="!hasBackupPolicy"
          />
        </div>

        <div class="period-box">
          <div>기간</div>
          <input
            type="text"
            class="number-input"
            v-model="backupPeriod"
            :disabled="!hasBackupPolicy"
            min="0"
          />
          개월
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
      </div>
    </div>
    <SaveModal
      v-if="showSaveModal"
      @close="showSaveModal = false"
      @save="saveAll"
    ></SaveModal>
  </div>
</template>

<script src="@/input.js"></script>
<script>
import SaveModal from "../components/SaveModal.vue";
import axios from "axios";
export default {
  components: {
    SaveModal,
  },
  data() {
    return {
      showSaveModal: false,
      hasDisposalPolicy: false,
      disposalPeriod: "2",
      backupStartDate: "2022-01-01",
      hasBackupPolicy: false,
      backupPeriod: "1",
      currAnalPeriod: 1,
      validError: false,
      backupPeriodError: false,
      backupStartDateError: false,
      disposalPeriodError: false,
      errorMsg: "",
    };
  },
  watch: {
    disposalPeriod(val) {
      this.disposalPeriod = this.disposalPeriod.replace(
        /[^0-9]/g,
        ""
      );
      if (
        this.hasDisposalPolicy &&
        this.disposalPeriod === ""
      ) {
        this.disposalPeriodError = true;
      } else {
        this.disposalPeriodError = false;
      }
    },
    backupPeriod(val) {
      this.backupPeriod = this.backupPeriod.replace(
        /[^0-9]/g,
        ""
      );
      if (
        this.hasBackupPolicy &&
        this.backupPeriod === ""
      ) {
        this.backupPeriodError = true;
      } else {
        this.backupPeriodError = false;
      }
    },
    hasBackupPolicy(val) {
      if (!this.hasBackupPolicy) {
        this.backupPeriod = "1";
        this.backupStartDate = "2022-01-01";
      }
    },
    hasDisposalPolicy(val) {
      if (!this.hasDisposalPolicy) {
        this.disposalPeriod = "1";
      }
    },
    backupStartDate(val) {
      if (new Date(this.backupStartDate) > new Date()) {
        this.backupStartDateError = true;
      } else if (this.backupStartDate === "") {
        this.backupStartDateError = true;
      } else {
        this.backupStartDateError = false;
      }
    },
    backupStartDateError(val) {
      this.validError =
        this.backupStartDateError ||
        this.backupPeriodError ||
        this.disposalPeriodError;
    },
    backupPeriodError(val) {
      this.validError =
        this.backupStartDateError ||
        this.backupPeriodError ||
        this.disposalPeriodError;
    },
    disposalPeriodError(val) {
      this.validError =
        this.backupStartDateError ||
        this.backupPeriodError ||
        this.disposalPeriodError;
    },
    validError(val) {
      if (this.validError) {
        this.errorMsg = "입력값을 확인해주세요.";
      } else {
        this.errorMsg = "";
      }
    },
  },
  methods: {
    saveAll() {
      this.updateDisposalPeriod();
      this.updateBackupPeriod();
    },
    getBackupPeriod() {
      axios
        .get(
          "http://163.180.117.160:8080/retention/period?condition=backup"
        )
        .then((res) => {
          if (res.data.period == "no policy") {
            this.hasBackupPolicy = false;
          } else {
            this.hasBackupPolicy = true;
            this.backupStartDate = res.data.startDate;
            this.backupPeriod =
              res.data.period.split(" ")[0];
          }
        })
        .catch((err) => console.log(err));
    },
    getDisposalPeriod() {
      axios
        .get(
          "http://163.180.117.160:8080/retention/period?condition=disposal"
        )
        .then((res) => {
          if (res.data.period == "no policy") {
            this.hasDisposalPolicy = false;
          } else {
            this.hasDisposalPolicy = true;
            this.disposalPeriod =
              res.data.period.split(" ")[0];
          }
        })
        .catch((err) => console.log(err));
    },
    updateDisposalPeriod() {
      var data = { condition: "disposal" };
      if (!this.hasDisposalPolicy) {
        data = { ...data, period: "no policy" };
      } else {
        data = {
          ...data,
          period: this.disposalPeriod + " months",
        };
      }

      axios
        .put(
          "http://163.180.117.160:8080/retention/period",
          data
        )
        .then(() => {
          this.getDisposalPeriod();
        })
        .catch((err) => console.log(err));
    },

    updateBackupPeriod() {
      var data = { condition: "backup" };
      if (!this.hasBackupPolicy) {
        data = { ...data, period: "no policy" };
      } else {
        data = {
          ...data,
          period: this.backupPeriod + " months",
          startDate: this.backupStartDate,
        };
      }

      axios
        .put(
          "http://163.180.117.160:8080/retention/period",
          data
        )
        .then(() => {
          this.getBackupPeriod();
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getBackupPeriod();
    this.getDisposalPeriod();
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
.table-main__content {
  display: flex;
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
  margin-top: 24px;
  margin-left: 60px;
  font-size: 17px;
  margin-bottom: 5px;
}
button {
  background-color: #4978d4 !important;
}
.start-box {
  margin-left: 40px;
  margin-right: 10px;
}
.start-box input {
  width: 150px;
  height: 35px;
  border: none;
  padding: 5px;
}
.policy-box {
  margin-left: 40px;
}

.policy-box button {
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

.period-box {
  margin-left: 40px;
}

.save-box {
  position: absolute;
  right: 100px;
}

.save-box button {
  width: 150px;
  margin: 0px;
  height: 35px;
  border: none;
}

.unclicked {
  background-color: #7a859b !important;
}
.analysis-setting .period-box {
  margin-left: 30px;
}
.analysis-setting .period-box {
  margin-left: 40px;
}
.analysis-setting .period-box button {
  width: 118px;
  margin-right: 15px;
}

.number-input {
  width: 50px;
  height: 35px;
}
button,
input {
  border: none !important;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.125);
}
input {
  background-color: rgb(240, 240, 240);
  border-radius: 3px;
  border: none;
}
input:disabled {
  background-color: gray;
  border-radius: 3px;
  border: none;
}
.invalid {
  color: red;
}

.save-label {
  font-size: 14px;
}
.error {
  display: block;
  background-color: transparent;
  height: 25px;
  font-size: 15px;
  color: red;
}
.error:disabled {
  background-color: transparent;
}
</style>
