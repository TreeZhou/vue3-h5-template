<template>
  <popupWrapper>
    <div class="content">sdfdf是的发生打发第三方</div>
  </popupWrapper>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: vw(300);
  height: vw(300);
  font-size: vw(24);
  border-radius: 8px;
  background: #fff;
}
</style>
