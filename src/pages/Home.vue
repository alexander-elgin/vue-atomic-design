<template>
  <div class="home">
    <HelloI18n :msg="$t('message')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloI18n from '@/atoms/HelloI18n.vue';

export default {
  name: 'home',
  components: {
    HelloI18n,
  },
};
</script>
