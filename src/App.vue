<template>
  <div id="app">
    <component :is="template">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    template() {
      return `${this.$route.meta.template || 'default'}-template`;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
