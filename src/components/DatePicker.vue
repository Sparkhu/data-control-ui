<template>
  <div>
    <div>
      <el-date-picker
        v-model="startDate"
        type="date"
        placeholder="시작일"
        value-format="yyyyMMdd"
        @change="changeDate('start')"
        :picker-options="startDateOptions"
      ></el-date-picker>
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        placeholder="종료일"
        value-format="yyyyMMdd"
        @change="changeDate('end')"
        :picker-options="endDateOptions"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DateCheck",
  data() {
    return {
      startDate: "",
      endDate: "",
      startDateOptions: {
        disabledDate: this.disabledStDate,
      },
      endDateOptions: {
        disabledDate: this.disabledEdDate,
      },
    };
  },
  created() {
    this.startDate = moment().format("YYYYMMDD");
    this.endDate = moment().add(-1, "months").format("YYYYMMDD");
  },
  methods: {
    disabledStDate(date) {
      date = moment(String(date)).format("YYYYMMDD");
      return (
        date > moment().format("YYYYMMDD") || date < moment().add(-1, "years").format("YYYYMMDD")
      );
    },
    disabledEdDate(date) {
      date = moment(String(date)).format("YYYYMMDD");
      return date > moment().format("YYYYMMDD") || date < this.searchData.startDate;
    },
    changeDate(type) {
      if (type === "start") {
        if (this.endDate === null || this.startDate > this.endDate) {
          this.endDate = this.startDate;
        }
        if (
          moment(this.startDate).isBefore(
            moment(this.endDate).subtract(1, "months").format("YYYYMMDD")
          )
        ) {
          alert("검색 기간은 최대 1개월까지 선택 가능 합니다.");
          this.startDate = moment(this.endDate).subtract(1, "months").format("YYYYMMDD");
        }
      } else if (type === "end") {
        if (this.startDate === null) {
          this.startDate = this.endDate;
        }
        if (
          moment(this.endDate).isAfter(moment(this.startDate).add(1, "months").format("YYYYMMDD"))
        ) {
          alert("검색 기간은 최대 1개월까지 선택 가능 합니다.");
          this.endDate = moment(this.startDate).add(1, "months").format("YYYYMMDD");
        }
      }
    },
  },
};
</script>
<style></style>

출처: https://string.tistory.com/88 [Sky Archive]
