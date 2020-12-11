<template>
  <section class="loading">
    <div class="container">
      <div class="process">
        <div class="process-bar" :style="{ width: _progress + '%' }"></div>
      </div>
      <span>{{ _progress }}%...</span>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    loaded: { default: 0 },
    total: { default: 1 },
    mode: {
      default: 'auto'
    }
  },
  data() {
    return {
      progress: 0
    };
  },
  computed: {
    _progress() {
      const value = Number(this.progress);
      if (value > 97) return 97;
      return value;
    }
  },
  watch: {
    loaded() {
      if (this.mode === 'timer') return;
      this.progress = ((this.loaded * 100) / this.total)
        .toFixed(2)
        .replace(/\.00$/, '');
    }
  },
  methods: {
    startProgress() {
      const interval = 2;
      const allProcess = 98;
      const allTime = 1000 * 10;

      const computer = (interval, allProcess, allTime) => {
        const times = allProcess / interval;
        const everyTimes = allTime / times;
        return everyTimes;
      };
      const time = computer(interval, allProcess, allTime);
      this.timer = setInterval(() => {
        if (this.progress <= allProcess)
          return (this.progress = this.progress + interval);
        clearInterval(this.timer);
      }, time);
    }
  },
  mounted() {
    if (this.mode === 'auto') this.startProgress();
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    .process {
      margin: 0 auto;
      background-color: #6a3e30;
      width: vw(300);
      height: vw(10);
      overflow: hidden;
      border-radius: 100px;
      .process-bar {
        width: 0%;
        height: 100%;
        background-color: #de928a;
      }
      .twill {
        $height: 100%;
        $position1: 40%;
        $position2: 60%;
        $bsw: 10%;

        width: 0%;
        height: $height;
        border-radius: vw(100);
        background-size: $bsw 100%;
        background-image: linear-gradient(
          -45deg,
          #fdc15d 0px,
          #fed37f 0px,
          #fed37f $position1,
          #fdc15d 0px,
          #fdc15d $position2,
          #fed37f 0px
        );
      }
    }
  }
  span {
    white-space: nowrap;
    font-size: vw(28);
  }
}
</style>
