<template>
  <div class="page-loading">
    <svg
      class="spinner"
      width="200px"
      height="200px"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style="background: none"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.875s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(45 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.625s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(135 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.375s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(225 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.125s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(315 50 50)">
        <rect
          x="47.5"
          y="25"
          rx="7.125"
          ry="3.75"
          width="5"
          height="10"
          fill="#14843c"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.page-loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  background: #ffffff;
  overflow: hidden;
}
.spinner {
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  width: 100px;
}
</style>
