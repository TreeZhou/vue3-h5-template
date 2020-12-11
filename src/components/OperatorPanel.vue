<script>
// <operatorPanel v-if="$search && $search.operatorPanel"></operatorPanel>
const array = ['测试按钮'];
export default {
  render: function (createElement) {
    const childNode = array.map(item => {
      return createElement(
        'span',
        {
          on: {
            click: () => {
              this.handler(item);
            }
          }
        },
        item
      );
    });

    return createElement(
      'section', // 标签名称
      {
        class: {
          'oparetion-panel': true
        }
      },
      childNode
    );
  },
  data() {
    return {};
  },
  methods: {
    handler(type) {
      console.log(type);
    }
  }
};
</script>

<style lang="scss" scoped>
.oparetion-panel {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  color: black;
  span {
    border: 1px solid red;
    display: inline-block;
  }
}
</style>
