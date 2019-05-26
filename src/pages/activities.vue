<template>
  <v-activities-list />
</template>

<script>
import ActivitiesList from '@/molecules/activities-list';

export default {
  name: 'about',
  components: {
    'v-activities-list': ActivitiesList,
  },
};
</script>
