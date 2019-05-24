<template>
  <div>
    <v-nav />
    <img alt="Vue logo" src="../assets/logo.png">
    <slot />
  </div>
</template>

<script>
import Nav from '@/organisms/nav';

export default {
  components: {
    'v-nav': Nav,
  },
};
</script>
