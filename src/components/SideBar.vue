<template>
  <div class="side-bar">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <div>
      <div
        class="home"
        @click="
          $router.push('/');
          menuOpen = 0;
        "
      >
        <i class="bi bi-globe2"></i>
        Sparkhu
      </div>
      <div class="menu">
        <div class="menu1">
          <i class="bi bi-display"></i>
          대시보드
        </div>
        <div class="menu2" style="cursor: pointer">
          <p
            @click="
              $router.push('/');
              menuOpen = 0;
            "
          >
            <i v-if="menuOpen == 0" class="bi bi-chevron-right"></i> 데이터 관리
          </p>
          <p
            @click="
              $router.push('cctv');
              menuOpen = 1;
            "
          >
            <i v-if="menuOpen == 1" class="bi bi-chevron-right"></i> 지능형 이상감지
          </p>
        </div>
      </div>

      <div class="menu">
        <div class="menu1">
          <i class="bi bi-gear"></i>
          IoT 관리
        </div>
        <div class="menu2" style="cursor: pointer">
          <p
            @click="
              $router.push('/sensor-manage');
              menuOpen = 2;
            "
          >
            <i v-if="menuOpen == 2" class="bi bi-chevron-right"></i> 센서 관리
          </p>

          <p
            @click="
              $router.push('/sensorpos');
              menuOpen = 3;
            "
          >
            <i v-if="menuOpen == 3" class="bi bi-chevron-right"></i> 센서 위치 등록
          </p>

          <p
            @click="
              $router.push('cctv-setting');
              menuOpen = 4;
            "
          >
            <i v-if="menuOpen == 4" class="bi bi-chevron-right"></i> CCTV 설정
          </p>
        </div>
      </div>

      <div class="menu">
        <div class="menu1">
          <i class="bi bi-exclamation-triangle"></i>
          이상 감지 관리
        </div>
        <div class="menu2" style="cursor: pointer">
          <p
            @click="
              $router.push('/alertsettings');
              menuOpen = 9;
            "
          >
            <i v-if="menuOpen == 9" class="bi bi-chevron-right"></i> 이상 경고 설정
          </p>
          <p
            @click="
              $router.push('/abnormal-detection-log');
              menuOpen = 10;
            "
          >
            <i v-if="menuOpen == 10" class="bi bi-chevron-right"></i> 이상 감지 이력
          </p>
          <p
            @click="
              $router.push('/sensor-data-log');
              menuOpen = 12;
            "
          >
            <i v-if="menuOpen == 12" class="bi bi-chevron-right"></i> 센서 데이터 기록
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",

  data() {
    return {
      menuOpen: 0,
    };
  },
};
</script>

<style>
.user-info-wrapper {
  width: 90%;
  height: 30px;
  background-color: rgb(48 59 90 / 45%);
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 20px;
  position: absolute;
  right: 5%;
  bottom: 12px;
}
.user-info {
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
}

.bi-box-arrow-right:hover {
  cursor: pointer;
}

.side-bar {
  order: 1;
  float: left;
  width: 240px;
  height: 100%;
  background-color: #1a233a;
  color: #c8d9f8;
  text-align: left;
  padding: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 8px 13px 20px 5px rgb(9 21 42 / 66%);
}

.home {
  color: #517bcd;
  padding: 1.2rem 1rem;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
}
p {
  transition: all 0.5s;
  font-size: 0.85rem;
}

p:hover {
  color: #517bcd;
  padding-left: 0.1rem;
}

.goto-login {
  cursor: pointer;
}
</style>
