<template>
  <div></div>
</template>

<script>
import { signOut } from '@/utils/current-user';

export default {
  mounted() {
    signOut();
    this.$router.push({ name: 'home' });
  },
};
</script>
