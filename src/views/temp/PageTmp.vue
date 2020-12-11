<template>
  <section class="page" ref="container">
    <Btn
      class="btn"
      :bgImg="require('@/assets/image/default.png')"
      @btnClick="handler"
    ></Btn>
  </section>
</template>

<script>
import { mapState } from 'vuex';
let componentName = 'PageName';
export default {
  name: componentName,
  components: {},
  props: {
    // prpoName: {
    //   type: Array, // Object,Number,Boolean
    //   default: 1,
    //   required: true
    // }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('pageManager', ['pageData'])
    // key(val) {
    //   return '';
    // }
  },
  watch: {
    // 'date.item': ['someMethod', 'someMethod'],
    // $route: {
    //   deep: true,
    //   immediate: true,
    //   handler: 'someMethod'
    // }
  },
  methods: {
    handler() {}
  },
  beforeCreate() {},
  created() {
    // prop data computer (prop定义后再定义data,所以data可以引用prop)
  },
  beforeMount() {},
  mounted() {
    // $el
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    top: 10vh;
  }
}
</style>
