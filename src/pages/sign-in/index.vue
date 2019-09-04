<template>
  <v-container fill-height>
    <v-layout row align-center justify-center>
      <v-sign-in />
    </v-layout>
  </v-container>
</template>

<script>
import SignInForm from '@/organisms/sign-in-form';

export default {
  components: {
    'v-sign-in': SignInForm,
  },
};
</script>

<style scoped>
</style>
