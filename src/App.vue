<template>
  <div id="app">
    <v-app>
      <component :is="template">
        <router-view />
      </component>
    </v-app>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
