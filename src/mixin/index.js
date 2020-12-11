const mixin = {
  methods: {
    sleep: function (interval = 2000) {
      return new Promise(resolve => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          resolve();
        }, interval);
      });
    }
  }
};
export default function (app) {
  app.mixin(mixin);
}
