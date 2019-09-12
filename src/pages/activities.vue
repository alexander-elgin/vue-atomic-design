<template>
  <v-activities-list />
</template>

<script>
import { mapActions } from 'vuex';

import ActivitiesList from '@/molecules/activities-list';

export default {
  name: 'about',
  components: {
    'v-activities-list': ActivitiesList,
  },
  methods: {
    ...mapActions('nav', [
      'setPageTitle',
    ]),
  },
  mounted() {
    this.setPageTitle('Activities');
  },
};
</script>
