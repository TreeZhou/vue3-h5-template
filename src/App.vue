<template>
  <div id="app">
    <router-view></router-view>
    <VfModal></VfModal>
    <Landscape />
    <operatorPanel v-if="$search && $search.operatorPanel"></operatorPanel>
  </div>
</template>

<script>
import { VfModal } from '@/plugins/vf-modal/index.js';
export default {
  name: 'App',
  components: {
    VfModal
  },
  data() {
    return {
      $search: false
    };
  },
  setup() {},
  methods: {
    async init() {
      await Promise.all([this.loadSources()]);
      this.$router.replace('Home');
    },
    async loadSources() {
      this.$router.replace('LittleLoad');
      this.$router.replace('Loading');
    }
  },
  mounted() {
    this.init();

    //TODO:
    this.$modal.open('Share', {});
  }
};
</script>

<style lang="scss">
@import '@/styles/normalize.scss';
@import '@/styles/selfNormalize.scss';
@import '@/styles/animate.scss';
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%; //苹果xconstant,env 必加
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
