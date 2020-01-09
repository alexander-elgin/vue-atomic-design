<template>
  <v-container fill-height>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-sign-in />
      </v-flex>
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
