<template>
  <transition v-bind:css="false" v-on:enter="enter" v-on:leave="leave">
    <section class="popup-wrapper">
      <transition name="fade-in-up" @after-leave="containerLeft">
        <div
          class="popup-wrapper-container"
          v-show="show"
          @click.self="containerClicked"
        >
          <slot></slot>
        </div>
      </transition>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    enter: function () {
      this.show = true;
    },
    leave(el, done) {
      this.show = false;
      this.done = done;
    },
    containerLeft() {
      typeof this.done === 'function' && this.done();
    },
    containerClicked() {
      this.$emit('wrapper-clicked');
    }
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  &-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}

.fade-in-up {
  &-enter-active {
    animation: fadeInUp 0.5s ease-in-out;
  }
  &-leave-active {
    animation: fadeInUp 0.6s ease-in-out reverse;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 500px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
