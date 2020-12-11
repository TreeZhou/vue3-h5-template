<template>
  <section v-show="visiable" class="loading">
    <transition name="fade">
      <svg
        class="lds-spinner"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style="background: 0 0"
      >
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-1.1375s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(45 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.9750000000000001s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(90 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.8125s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(135 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.65s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(180 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.48750000000000004s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(225 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.325s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(270 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="-0.1625s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47"
          y="24"
          rx="9.4"
          ry="4.8"
          width="6"
          height="12"
          fill="#f9f9f9"
          transform="rotate(315 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'LoadingIcon',
  data() {
    return {
      visiable: false
    };
  }
};
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-59%, -50%);
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.473);
  width: 100px;
  height: 100px;
  border-radius: 10px;
  .lds-spinner {
    width: 100%;
    height: 100%;
  }
}
</style>
