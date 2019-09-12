<template>
  <div>
    <v-nav />
    <br />
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
