<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-sign-in />
      </v-col>
    </v-row>
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
