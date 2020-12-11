import Router from 'vue-router';
const originalPull = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPull.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
