<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="cyan">
        <v-toolbar-title>Todo List</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-add-activity-form ref="addActivityForm" />
        <v-list subheader>
          <v-activity v-for="(activity, index) in activities" :key="index" :activity="activity" />
        </v-list>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import Activity from './activity';
import AddActivityForm from './add-activity-form';

export default {
  name: 'ActivitiesList',
  components: {
    'v-activity': Activity,
    'v-add-activity-form': AddActivityForm,
  },
  data() {
    return {
    };
  },
  computed: {
    activities() {
      return this.$store.state.activity.activities;
    },
  },
  methods: {
    add() {
      this.$refs.addActivityForm.add();
    },
  },
};
</script>
