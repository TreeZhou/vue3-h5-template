<template>
  <PopupWrapper>
    <div class="content">
      <Btn
        class="btn"
        :bgImg="require('@/assets/image/default.png')"
        @btnClick="handle"
      ></Btn>
    </div>
  </PopupWrapper>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    handle() {}
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: vw(188);
  height: vw(188);
  border-radius: 8px;
  background: #fff;
}
.btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  top: 10vh;
}
</style>
